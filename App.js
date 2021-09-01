import React from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { Splash, Home, Error } from './src/index';
import { connect } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import fetchReducer from './src/reducers/fetchReducer';

const Stack = createStackNavigator()
const store = createStore(fetchReducer, applyMiddleware(thunk))



const stacknavigator = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Error" component={Error} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

class App extends React.Component {

    

    render() {
        return (
            stacknavigator()
        )

    }
}


export default App