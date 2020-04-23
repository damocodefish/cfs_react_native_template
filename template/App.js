/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {enableScreens} from 'react-native-screens';

import RootApp from '@root/RootApp';

enableScreens();

const App: () => React$Node = () => <RootApp />;
export default App;
