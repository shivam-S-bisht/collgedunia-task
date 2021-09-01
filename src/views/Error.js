import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { retry } from '../actions/fetchDataActions'

import { error } from '../styles'

class Error extends React.Component {

    render() {
        return (
            <View style={error.topview}>
                <Text style={error.message}>Something Went Wrong At Our End</Text>
                <TouchableOpacity style={error.retryTouchable}
                    onPress={()=>{
                        this.props.retry()
                        this.props.navigation.replace("Splash")
                    }}
                >
                    <Text style={error.retryText}>retry</Text>
                </TouchableOpacity>
            </View>
        )

    }
}

const mapToProps = (state) =>{
    return {
        progress: state.progress,
        error: state.error
    }
}

const dispatchToProps = (dispatch) => {
    return {
        retry: ()=>dispatch(retry())
    }
}

export default connect(mapToProps, dispatchToProps)(Error)