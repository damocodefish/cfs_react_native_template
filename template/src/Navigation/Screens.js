import {setGlobal} from 'reactn';
import {Navigation} from 'react-native-navigation';

import RootProvider from '@contexts/RootProvider';

import App from '@root/../App';
import TestScreen from '@pages/Home/TestScreen';
import SideMenu from '@pages/Home/SideMenu';
import TestModal from '@pages/Home/TestModal';

setGlobal({
    componentId: null,
});

export function registerScreens() {
    Navigation.registerComponentWithRedux(
        'app.WelcomeScreen',
        () => App,
        RootProvider
    );
    Navigation.registerComponentWithRedux(
        'home.TestScreen',
        () => TestScreen,
        RootProvider
    );
    Navigation.registerComponentWithRedux(
        'navigation.SideMenu',
        () => SideMenu,
        RootProvider
    );
    Navigation.registerComponentWithRedux(
        'modals.TestModal',
        () => TestModal,
        RootProvider
    );
}
