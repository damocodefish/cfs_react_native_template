import React from 'react';
import $ from 'styled-components';
import {AppDimensions} from '@styles/Dimensions';
import {useNavigation} from '@react-navigation/native';

const Container = $.View`
    background-color:#f92039;
    height: ${AppDimensions.FULL_HEIGHT}px;
    width: ${AppDimensions.FULL_WIDTH}px;
`;

const Close = $.TouchableOpacity`
    color: white;
    padding: 4px 10px;
`;

const Text = $.Text`
    color: white;
`;

const Header = $.View`
    display: flex;
    align-items: flex-end;
    padding: 10px 40px;
`;

const TestModal = (props) => {
    const {navigate, goBack} = useNavigation();
    return (
        <Container>
            <Header>
                <Close onPress={() => goBack()}>
                    <Text>Close</Text>
                </Close>
            </Header>
        </Container>
    );
};

export default TestModal;
