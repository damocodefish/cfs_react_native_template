import React from 'react';
import $ from 'styled-components';
import {AppDimensions} from '@styles/Dimensions';

const Container = $.View`
    background-color: #f92039;
    height: ${AppDimensions.FULL_HEIGHT}px;
    width: ${AppDimensions.FULL_WIDTH}px;
`;

const List = $.FlatList`

    margin-top: 100px;
`;

const MenuItem = $.TouchableOpacity`
    padding: 10px 20px; 
`;

const Text = $.Text``;

const MenuItems = [
    {
        route: 'app.WelcomeScreen',
        name: 'Home',
    },
    {
        route: 'home.TestScreen',
        name: 'Test Screen',
    },
];

const SideMenu = (props) => {
    return (
        <Container>
            <List
                data={MenuItems}
                renderItem={({item}) => (
                    <MenuItem onPress={() => null}>
                        <Text>{item.name}</Text>
                    </MenuItem>
                )}
            />
        </Container>
    );
};

export default SideMenu;
