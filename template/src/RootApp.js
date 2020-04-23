import React from 'react';
import styled from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';

import {AppDimensions} from '@styles/Dimensions';
import RootStack from '@root/Navigation/RootStack';

const RootContainer = styled.SafeAreaView`
    width: ${AppDimensions.FULL_WIDTH}px;
    height: ${AppDimensions.FULL_HEIGHT}px;
    background-color: #0d0d0d;
`;

const RootApp = () => {
    return (
        <RootContainer>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </RootContainer>
    );
};

export default RootApp;
