import {Dimensions, Platform} from 'react-native';

import {getInset} from 'react-native-safe-area-view';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const fullHeight = Dimensions.get('window').height;
const fullWidth = Dimensions.get('window').width;
const landScape = fullWidth > fullHeight;
const statusBar = Platform.OS === 'android' ? getStatusBarHeight() : 0;
const topInset = getInset('top', landScape) + statusBar;
const bottomInset = getInset('bottom', landScape);
const usableHeight = fullHeight - topInset - bottomInset;

export const AppDimensions = {
    FULL_HEIGHT: fullHeight,
    FULL_WIDTH: fullWidth,

    TOP_INSET: topInset,
    BOTTOM_INSET: bottomInset,

    TOP_SAFETY_PADDING: 10,
    BOTTOM_SAFETY_PADDING: bottomInset === 0 ? 20 : 5,

    USABLE_HEIGHT: usableHeight,

    STATUSBAR_HEIGHT: statusBar,
    NAVBAR_HEIGHT: 46,
    TABBAR_HEIGHT: 66 + bottomInset,
};

export const FULL_HEIGHT = fullHeight;
export const FULL_WIDTH = fullWidth;
export const TOP_INSET = topInset;
export const BOTTOM_INSET = bottomInset;
export const USABLE_HEIGHT = usableHeight;

export default {AppDimensions};
