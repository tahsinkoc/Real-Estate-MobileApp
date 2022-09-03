import { Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import HomePage from './HomePage';
import HompageHeader from './HompageHeader';
import Menu from './Menu';
import Product from './Product';
import MNLayout from './messages-notif/MNLayout';


const PageControl = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen options={{ header: HompageHeader, headerShown: true }} name="Home" component={HomePage}></Stack.Screen>
                <Stack.Screen name='Product' component={Product} options={{ header: HompageHeader, headerShown: true }}></Stack.Screen>
                <Stack.Screen component={Menu} name="Menu"></Stack.Screen>
                <Stack.Screen component={Login} name="Login"></Stack.Screen>
                <Stack.Screen component={MNLayout} name='Notifications' options={{header: HompageHeader, headerShown: true}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default PageControl
