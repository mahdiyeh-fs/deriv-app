import React from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import { Tabs } from '@deriv/components';
import { useStore } from '@deriv/stores';
import { localize } from '@deriv/translations';
import { isDesktop } from '@deriv/shared';
import SideNote from 'Components/side-note';
import { TSideNotesProps } from 'Types';
import DepositTab from './deposit-tab';
import WithdrawalTab from './withdrawal-tab';
import PaymentAgentDisclaimer from '../payment-agent-disclaimer';
import './payment-agent-list.scss';

type TProps = {
    setSideNotes?: (notes: TSideNotesProps) => void;
};

const PaymentAgentList = ({ setSideNotes }: TProps) => {
    const { modules } = useStore();
    const { payment_agent, general_store } = modules.cashier;

    React.useEffect(() => {
        if (!general_store.is_loading && !payment_agent.is_try_withdraw_successful) {
            setSideNotes?.([
                <SideNote has_title={false} key={0}>
                    <PaymentAgentDisclaimer />
                </SideNote>,
            ]);
        } else {
            setSideNotes?.([]);
        }
    }, [setSideNotes, general_store.is_loading, payment_agent.is_try_withdraw_successful]);

    return (
        <div className='payment-agent-list cashier__wrapper--align-left'>
            <div
                className={classNames('payment-agent-list__instructions', {
                    'payment-agent-list__instructions-hide-tabs': payment_agent.is_try_withdraw_successful,
                })}
            >
                <Tabs
                    active_index={payment_agent.active_tab_index}
                    className='tabs--desktop'
                    onTabItemClick={payment_agent.setActiveTab}
                    top
                    header_fit_content={isDesktop()}
                >
                    <div label={localize('Deposit')}>
                        <DepositTab />
                    </div>
                    <div label={localize('Withdrawal')}>
                        <WithdrawalTab />
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default observer(PaymentAgentList);
