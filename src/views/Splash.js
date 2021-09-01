import React, { useState, useEffect } from 'react'
import { View, Animated, Easing } from 'react-native'
import LottieView from 'lottie-react-native';
import { global } from '../styles'

import { create } from 'apisauce'
import key from '../context'

class Splash extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            progress: new Animated.Value(0),
            iterations: 5,

            flag: null
        }


    }

    api = create({
        baseURL: "http://api.openweathermap.org/data/2.5",
        headers: { Accept: 'application/vnd.github.v3+json' },
        timeout: 2000
    })


    getData() {
        this.setState({ flag: true })
        this.api.get(`/forecast?q=Delhi&appid=${key}`)
            .then((res) => {
                if(res.data!=null) {
                    this.setState({ flag: true })
                } else {
                    this.setState({ flag: false })
                }

            }).catch(() => this.setState({flag: false}))
    }


    componentDidMount() {
        this.getData()
        this.loader(1)
    }


    loader(iterations) {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false
        }).start(() => {
            this.state.flag == true ? this.props.navigation.replace("Home") : this.props.navigation.replace("Error")
        }
        )
    }


    render() {

        return (
            <>
                <View style={[global.center, { flex: 1 }]}>
                    <LottieView source={require('../../assets/226-splashy-loader.json')} progress={this.state.progress} />
                </View>
            </>
        )
    }

}

export default Splash

