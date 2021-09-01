import React from 'react'
import { View, Animated } from 'react-native'
import LottieView from 'lottie-react-native';
import { global } from '../styles'

import { connect } from 'react-redux'
import { getGeoLocation } from '../actions/fetchDataActions';

class Splash extends React.Component {



    componentDidMount() {
        this.props.getGeoLocation()
        this.loader(1)
    }


    loader() {
        Animated.timing(this.props.progress, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false
        }).start(() => {
            this.props.error == false ? this.props.navigation.replace("Home") : this.props.navigation.replace("Error")
        }
        )
    }


    render() {

        return (
            <>
                <View style={[global.center, { flex: 1 }]}>
                    <LottieView source={require('../../assets/226-splashy-loader.json')} progress={this.props.progress} />
                </View>
            </>
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
        getGeoLocation: ()=>dispatch(getGeoLocation())
    }
}

export default connect(mapToProps, dispatchToProps)(Splash)

