import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { error } from '../styles'

class Error extends React.Component {

    render() {
        return (
            <View style={error.topview}>
                <Text style={error.message}>Something Went Wrong At Our End</Text>
                <TouchableOpacity style={error.retryTouchable}
                    onPress={()=>{
                        this.props.navigation.replace("Splash")
                    }}
                >
                    <Text style={error.retryText}>retry</Text>
                </TouchableOpacity>
            </View>
        )

    }
}

export default Error