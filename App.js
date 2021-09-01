import React from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const stacknavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

const App = () => {
    return (
        <>
            <View>
                <Text>HEllo World</Text>
            </View>
        </>
    )
}

export default App