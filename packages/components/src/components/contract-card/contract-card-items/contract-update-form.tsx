import classNames from 'classnames';
import React from 'react';
import {
    getCancellationPrice,
    getContractUpdateConfig,
    getLimitOrderAmount,
    isCryptocurrency,
    isDeepEqual,
    isMultiplierContract,
    pick,
    getTotalProfit,
} from '@deriv/shared';
import Button from '../../button';
import MobileWrapper from '../../mobile-wrapper';
import Money from '../../money';
import InputWithCheckbox from '../../input-wth-checkbox';
import { TContractInfo, TContractStore } from '@deriv/shared/src/utils/contract/contract-types';
import { TGetCardLables, TToastConfig } from '../../types';
import ArrowIndicator from '../../arrow-indicator';

export type TGeneralContractCardBodyProps = {
    addToast: (toast_config: TToastConfig) => void;
    contract_info: TContractInfo;
    contract_update: TContractInfo['contract_update'];
    connectWithContractUpdate?: (contract_update_form: React.ElementType) => React.ElementType;
    currency: string;
    current_focus?: string | null;
    error_message_alignment?: string;
    getCardLabels: TGetCardLables;
    getContractById: (contract_id: number) => TContractStore;
    should_show_cancellation_warning: boolean;
    has_progress_slider: boolean;
    is_mobile: boolean;
    is_sold: boolean;
    onMouseLeave?: () => void;
    removeToast: (toast_id: string) => void;
    setCurrentFocus: (name: string) => void;
    toggleCancellationWarning: (state_change?: boolean) => void;
    progress_slider?: React.ReactNode;
    is_positions?: boolean;
};
export type TContractUpdateFormProps = Pick<
    TGeneralContractCardBodyProps,
    | 'addToast'
    | 'current_focus'
    | 'error_message_alignment'
    | 'getCardLabels'
    | 'onMouseLeave'
    | 'removeToast'
    | 'setCurrentFocus'
> & {
    contract: TContractStore;
    error_message_alignment?: string;
    getCardLabels: TGetCardLables;
    onMouseLeave?: () => void;
    removeToast: (toast_id: string) => void;
    setCurrentFocus: (name: string | null) => void;
    toggleDialog: (e: React.MouseEvent<HTMLButtonElement>) => void;
    getContractById: (contract_id: number) => TContractStore;
    is_accumulator?: boolean;
    is_turbos?: boolean;
};

const ContractUpdateForm = (props: TContractUpdateFormProps) => {
    const {
        addToast,
        contract,
        current_focus,
        error_message_alignment,
        getCardLabels,
        is_turbos,
        is_accumulator,
        onMouseLeave,
        removeToast,
        setCurrentFocus,
        toggleDialog,
    } = props;

    React.useEffect(() => {
        return () => contract.clearContractUpdateConfigValues();
    }, [contract]);

    const {
        contract_info,
        contract_update_take_profit,
        has_contract_update_take_profit,
        contract_update_stop_loss,
        has_contract_update_stop_loss,
        updateLimitOrder,
        validation_errors,
    } = contract;

    const [contract_profit_or_loss, setContractProfitOrLoss] = React.useState({
        contract_update_take_profit,
        contract_update_stop_loss,
    });

    const { buy_price, currency = '', is_valid_to_cancel } = contract_info;
    const { stop_loss, take_profit } = getLimitOrderAmount(contract_info.limit_order);
    const { contract_update_stop_loss: stop_loss_error, contract_update_take_profit: take_profit_error } =
        validation_errors;
    const error_messages: Record<string, string[] | undefined> = {
        take_profit: has_contract_update_take_profit ? take_profit_error : undefined,
        stop_loss: has_contract_update_stop_loss ? stop_loss_error : undefined,
    };
    const has_validation_errors = Object.keys(error_messages).some(field => error_messages[field]?.length);

    const isValid = (val?: number | null) => !(val === undefined || val === null);

    const is_multiplier = isMultiplierContract(contract_info.contract_type || '');
    const is_take_profit_valid = has_contract_update_take_profit
        ? +contract_update_take_profit > 0
        : isValid(is_multiplier ? stop_loss : take_profit);
    const is_stop_loss_valid = has_contract_update_stop_loss ? +contract_update_stop_loss > 0 : isValid(take_profit);
    const is_valid_multiplier_contract_update = is_valid_to_cancel
        ? false
        : !!(is_take_profit_valid || is_stop_loss_valid);
    const is_valid_contract_update = is_multiplier ? is_valid_multiplier_contract_update : !!is_take_profit_valid;

    const getStateToCompare = (
        _state: Partial<ReturnType<typeof getContractUpdateConfig> & TContractUpdateFormProps>
    ) => {
        const props_to_pick = [
            'has_contract_update_take_profit',
            'has_contract_update_stop_loss',
            _state.has_contract_update_take_profit && 'contract_update_take_profit',
            _state.has_contract_update_stop_loss && 'contract_update_stop_loss',
        ];

        return pick(_state, props_to_pick);
    };

    const isStateUnchanged = () => {
        return isDeepEqual(getStateToCompare(getContractUpdateConfig(contract_info)), getStateToCompare(props));
    };

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: number | string | boolean } }
    ) => {
        const { name, value } = e.target;
        setContractProfitOrLoss({
            ...contract_profit_or_loss,
            [name]: value,
        });

        contract.onChange?.({
            name,
            value,
        });
    };

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        updateLimitOrder();
        toggleDialog(e);
        onMouseLeave?.();
    };

    const take_profit_input = (
        <InputWithCheckbox
            addToast={addToast}
            removeToast={removeToast}
            current_focus={current_focus}
            classNameInlinePrefix='dc-contract-card-dialog__input--currency'
            currency={currency}
            error_messages={error_messages.take_profit}
            is_single_currency={true}
            is_negative_disabled={true}
            defaultChecked={has_contract_update_take_profit}
            label={getCardLabels().TAKE_PROFIT}
            name='contract_update_take_profit'
            onChange={onChange}
            error_message_alignment={error_message_alignment || 'right'}
            value={contract_profit_or_loss.contract_update_take_profit}
            is_disabled={is_multiplier && !!is_valid_to_cancel}
            setCurrentFocus={setCurrentFocus}
        />
    );

    const cancellation_price = getCancellationPrice(contract_info);
    const stop_loss_input = (
        <InputWithCheckbox
            addToast={addToast}
            removeToast={removeToast}
            current_focus={current_focus}
            classNameInlinePrefix='dc-contract-card-dialog__input--currency'
            currency={currency}
            defaultChecked={has_contract_update_stop_loss}
            error_messages={error_messages.stop_loss}
            is_single_currency={true}
            is_negative_disabled={true}
            label={getCardLabels().STOP_LOSS}
            max_value={Number(buy_price) - cancellation_price}
            name='contract_update_stop_loss'
            onChange={onChange}
            error_message_alignment={error_message_alignment || 'right'}
            value={contract_profit_or_loss.contract_update_stop_loss}
            is_disabled={!!is_valid_to_cancel}
            setCurrentFocus={setCurrentFocus}
        />
    );

    const total_profit = getTotalProfit(contract_info);

    return (
        <React.Fragment>
            <MobileWrapper>
                <div className='dc-contract-card-dialog__total-profit'>
                    <span>{getCardLabels().TOTAL_PROFIT_LOSS}</span>
                    <div
                        className={classNames(
                            'dc-contract-card__profit-loss dc-contract-card-item__total-profit-loss-value',
                            {
                                'dc-contract-card__profit-loss--is-crypto': isCryptocurrency(currency),
                                'dc-contract-card__profit-loss--negative': total_profit < 0,
                                'dc-contract-card__profit-loss--positive': total_profit > 0,
                            }
                        )}
                    >
                        <Money amount={total_profit} currency={currency} />
                        <ArrowIndicator className='dc-contract-card__indicative--movement' value={total_profit} />
                    </div>
                </div>
            </MobileWrapper>
            <div
                className={classNames('dc-contract-card-dialog__form', {
                    'dc-contract-card-dialog__form--no-stop-loss': is_accumulator || is_turbos,
                })}
            >
                <div className='dc-contract-card-dialog__input'>{take_profit_input}</div>
                {is_multiplier && <div className='dc-contract-card-dialog__input'>{stop_loss_input}</div>}
                <div className='dc-contract-card-dialog__button'>
                    <Button
                        text={getCardLabels().APPLY}
                        onClick={onClick}
                        primary
                        is_disabled={has_validation_errors || !is_valid_contract_update || isStateUnchanged()}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default ContractUpdateForm;
