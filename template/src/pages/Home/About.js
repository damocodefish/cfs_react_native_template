import React, {useEffect} from 'react';
import styled from 'styled-components';
import {AppDimensions} from '@styles/Dimensions';

import tool from '@assets/tool.png';

const RootContainer = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #0d0d0d;
`;

const Container = styled.View`
    padding: 40px;
    overflow: hidden;
`;

const Text = styled.Text`
    font-size: 18px;
    color: grey;
`;

const B = styled.Text`
    font-weight: bold;
`;

const White = styled.Text`
    color: white;
`;

const Red = styled.Text`
    color: #f92039;
`;

const Button = styled.TouchableOpacity`
    background-color: #f92039;
    padding: 14px 20px;
    text-align: center;
    margin-top: 10px;
    border-radius: 20px;
    width: 200px;
`;

const ButtonText = styled.Text`
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 12px;
`;

const ImageContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 140px;
`;

const Image = styled.Image``;

const About = (props) => {
    return (
        <RootContainer>
            <Container>
                <Text>
                    <B>
                        <Red>CodeFish</Red>
                        <White>Studio</White>
                    </B>{' '}
                    React Template
                </Text>
            </Container>
        </RootContainer>
    );
};

export default About;
