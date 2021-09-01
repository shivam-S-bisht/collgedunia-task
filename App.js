import React from 'react'
import { View, Text } from 'react-native'

import { Splash, Home, Error } from './src/index';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


const stacknavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Error" component={Error} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const App = () => {
    return (
        stacknavigator() 
    )
}

export default App