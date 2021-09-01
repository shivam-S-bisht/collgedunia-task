import React from 'react'
import { View, Text } from 'react-native'

import { home, global } from '../styles'

class Home extends React.Component {

    data = [
        {
            day: 'Monday',
            temp: 8
        },
        {
            day: 'Tuesday',
            temp: 8
        },
        {
            day: 'Wednesday',
            temp: 8
        },
        {
            day: 'Thursday',
            temp: 8
        },
        {
            day: 'Friday',
            temp: 8
        },

    ]

    render() {

        return (
            <View style={[home.topview]}>
                <View style={[home.displayView, global.center]}>
                    <Text style={home.shownTemp}>10</Text>
                    <Text style={home.shownCity}>Delhi</Text>
                </View>
                <View style={[home.others]}>
                    {
                        this.data.map(item => {
                            return (
                                <>
                                    <View style={home.otherItem}>
                                        <Text style={home.otherItemText}>{item.day}</Text>
                                        <Text style={home.otherItemText}>{item.temp}</Text>
                                    </View>
                                </>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}

export default Home