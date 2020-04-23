import React from 'react';
import {NavigationProvider} from './NavigationContext';

const RootProvider = ({children}) => (
    <NavigationProvider>{children}</NavigationProvider>
);

export default RootProvider;
