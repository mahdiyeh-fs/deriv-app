import React from 'react';
import { TWalletsMigrationStatus } from 'Types';
import WalletsBannerUpgrade from './wallets-banner-upgrade';
import WalletsBannerUpgrading from './wallets-banner-upgrading';
import WalletsBannerReady from './wallets-banner-ready';
import { observer, useStore } from '@deriv/stores';
import { useWalletMigration } from '@deriv/hooks';

// just for testing purpose and will be deleted in the future
type TBannerSwitcher = {
    status: TWalletsMigrationStatus;
    onChangeStatus: (value: TWalletsMigrationStatus) => void;
    is_eu: boolean;
    onChangeEU: (value: boolean) => void;
    children?: React.ReactNode;
};

// just for testing
const BannerSwitcher = ({ status, is_eu, onChangeStatus, onChangeEU, children }: TBannerSwitcher) => {
    const onStatusChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as TWalletsMigrationStatus;
        onChangeStatus(value);
    };

    const onEUChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'EU') onChangeEU(true);
        else if (event.target.value === 'Non-EU') onChangeEU(false);
    };

    return (
        <React.Fragment>
            <div>
                <select name='status' onChange={onStatusChangeHandler} value={status}>
                    <option value='ineligible'>ineligible</option>
                    <option value='eligible'>eligible</option>
                    <option value='in_progress'>in_progress</option>
                    <option value='done'>migrated</option>
                    <option value='failed'>failed</option>
                </select>
                <select name='is_eu' onChange={onEUChangeHandler} value={is_eu ? 'EU' : 'Non-EU'}>
                    <option value='EU'>EU</option>
                    <option value='Non-EU'>Non-EU</option>
                </select>
            </div>
            {children}
        </React.Fragment>
    );
};

const WalletsBanner = observer(() => {
    // just for testing purpose
    const {
        client: { setWalletMigrationStatus },
    } = useStore();
    const { status } = useWalletMigration();

    const [is_eu, setIsEu] = React.useState(false);

    // just for testing purpose too
    const Wrapper = ({ children }: { children?: React.ReactNode }) => (
        <React.Fragment>
            <BannerSwitcher
                status={status}
                onChangeStatus={setWalletMigrationStatus}
                is_eu={is_eu}
                onChangeEU={setIsEu}
            />
            {children}
        </React.Fragment>
    );

    switch (status) {
        // the user can upgrade to the wallets
        case 'eligible':
        case 'failed':
            return (
                <Wrapper>
                    <WalletsBannerUpgrade />
                </Wrapper>
            );
        // the wallets upgrading is in progress
        case 'in_progress':
            return (
                <Wrapper>
                    <WalletsBannerUpgrading is_eu={is_eu} />
                </Wrapper>
            );
        // the wallets upgrading completed
        case 'done':
            return (
                <Wrapper>
                    <WalletsBannerReady is_eu={is_eu} />
                </Wrapper>
            );
        // the user can't upgrade to the wallets
        default:
            return <Wrapper />;
    }
});

export default WalletsBanner;
