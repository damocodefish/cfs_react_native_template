import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '@pages/Home/Home';
import About from '@pages/Home/About';
import TestModal from '@pages/Home/TestModal';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const options = {
    cardStyle: {backgroundColor: 'transparent'},
    headerTransparent: true,
    headerTitleStyle: {color: 'white'},
    headerShown: false,
};

const HomeNavigator = () => (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={options}>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Home/About" component={About} />
    </HomeStack.Navigator>
);

const ProfileNavigator = () => (
    <ProfileStack.Navigator initialRouteName="Home" screenOptions={options}>
        <ProfileStack.Screen name="Home" component={Home} />
        <ProfileStack.Screen name="Home/About" component={About} />
    </ProfileStack.Navigator>
);

const TabNavigator = () => (
    <Tab.Navigator screenOptions={options}>
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
);

const RootStack = () => (
    <Stack.Navigator screenOptions={options} mode="modal">
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="HomeStack" component={HomeNavigator} />
        <Stack.Screen name="TestModal" component={TestModal} />
    </Stack.Navigator>
);

export default RootStack;
