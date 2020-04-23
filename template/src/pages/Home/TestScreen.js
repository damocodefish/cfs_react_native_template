import React from 'react';
import $ from 'styled-components';
import {AppDimensions} from '@styles/Dimensions';

const Container = $.View`
    background-color: white;
    height: ${AppDimensions.FULL_HEIGHT}px;
    width: ${AppDimensions.FULL_WIDTH}px;
`;

const TestScreen = (props) => {
    return <Container />;
};

TestScreen.options = {
    modalPresentationStyle: 'overCurrentContext',
    layout: {
        backgroundColor: 'transparent',
    },
};

export default TestScreen;
