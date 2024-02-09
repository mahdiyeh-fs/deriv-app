import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from '@deriv/shared';
import { useStore, observer } from '@deriv/stores';
import OnboardingSkeleton from '../../components/loader';
import TradingPlatformIcon from 'Assets/svgs/trading-platform';
import './onboarding.scss';

const Onboarding = observer(() => {
    const history = useHistory();

    const { traders_hub, client } = useStore();
    const { is_landing_company_loaded, is_logged_in, setPrevAccountType } = client;
    const { is_demo_low_risk, selectAccountType, toggleIsTourOpen } = traders_hub;

    if (is_logged_in) {
        if (!is_landing_company_loaded) {
            return <OnboardingSkeleton />;
        }
        toggleIsTourOpen(true);
        history.push(routes.traders_hub);
        if (is_demo_low_risk) {
            selectAccountType('real');
            setPrevAccountType('demo');
        }
    }

    return (
        <div className='onboarding'>
            <div className='onboarding__logo' data-testid='dt_onboarding_logo'>
                <TradingPlatformIcon icon='DerivLogo' />
            </div>
        </div>
    );
});

export default Onboarding;
