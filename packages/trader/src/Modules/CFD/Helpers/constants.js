import { OSDetect } from '@deriv/shared';

const REAL_DXTRADE_URL = 'https://dx.deriv.com';
const DEMO_DXTRADE_URL = 'https://dx-demo.deriv.com/';

const DXTRADE_IOS_APP_URL = 'https://apps.apple.com/us/app/deriv-x/id1563337503';
const DXTRADE_ANDROID_APP_URL = 'https://play.google.com/store/apps/details?id=com.deriv.dx';

const getServerName = is_demo => (is_demo ? 'Deriv-Demo' : 'Deriv-Server');

const getBrokerName = () => 'Deriv Limited';

const getTopUpConfig = () => {
    return {
        currency: 'USD',
        minimum_amount: 1000,
        additional_amount: 10000,
    };
};

const getPlatformDXTradeDownloadLink = (platform = undefined) => {
    switch (platform || OSDetect()) {
        case 'ios':
            return DXTRADE_IOS_APP_URL;
        case 'android':
            return DXTRADE_ANDROID_APP_URL;
        default:
            return getDXTradeWebTerminalLink(); // Web
    }
};

const getPlatformMt5DownloadLink = (platform = undefined) => {
    switch (platform || OSDetect()) {
        case 'windows':
            return 'https://download.mql5.com/cdn/web/deriv.limited/mt5/deriv5setup.exe';
        case 'linux':
            return 'https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux';
        case 'macos':
            return 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg';
        case 'ios':
            return 'https://download.mql5.com/cdn/mobile/mt5/ios?server=Deriv-Demo,Deriv-Server';
        case 'android':
            return 'https://download.mql5.com/cdn/mobile/mt5/android?server=Deriv-Demo,Deriv-Server';
        default:
            return getMT5WebTerminalLink({ category: 'real' }); // Web
    }
};

const getDXTradeWebTerminalLink = category => {
    return category === 'real' ? REAL_DXTRADE_URL : DEMO_DXTRADE_URL;
};

const getMT5WebTerminalLink = ({ category, loginid, server_name = 'Deriv-Server' }) => {
    const is_demo = category === 'demo';
    const server = is_demo ? 'Deriv-Demo' : server_name;
    const login = loginid ?? '';

    return `https://trade.mql5.com/trade?servers=${server}&trade_server=${server}${login && `&login=${login}`}`;
};

export {
    getServerName,
    getBrokerName,
    getPlatformDXTradeDownloadLink,
    getPlatformMt5DownloadLink,
    getDXTradeWebTerminalLink,
    getMT5WebTerminalLink,
    getTopUpConfig,
};
