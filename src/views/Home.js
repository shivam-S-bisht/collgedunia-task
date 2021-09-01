import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { home, global } from '../styles'

class Home extends React.Component {

    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



    render() {

        // console.log(this.props.data.current)

        return (
            <View style={[home.topview]}>
                <View style={[home.displayView, global.center]}>
                    <Text style={home.shownTemp}>{Math.floor(this.props.data.current.temp)}</Text>
                    <Text style={home.shownCity}>{this.props.data.timezone}</Text>
                </View>
                <View style={[home.others]}>
                    {
                        this.props.data.daily.slice(1, 7).map((item, idx) => {
                            return (
                                <View style={home.otherItem} key={idx}>
                                    <Text style={home.otherItemText}>{this.days[new Date(item.dt * 1000).getDay()]}</Text>
                                    <Text style={home.otherItemText}>{Math.floor(item.temp.day)}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}


const mapToProps = (state) => {
    return {
        data: state.data
    }
}


export default connect(mapToProps)(Home)