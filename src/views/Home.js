import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { home, global } from '../styles'

class Home extends React.Component {

    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



    render() {


        return (
            <View style={[home.topview]}>
                <View style={[home.displayView, global.center]}>
                    <Text style={home.shownTemp}>{Math.floor(this.props.data.current.temp)}</Text>
                    <Text style={home.shownCity}>{this.props.data.timezone}</Text>
                </View>
                <View style={[home.others]}>
                    {
                        this.props.data.daily.slice(1, 6).map((item, idx) => {
                            return (
                                <View style={[home.otherItem, {backgroundColor: idx%2==0?'#fac3e3':'#e0b5fa'}]} key={idx}>
                                    <Text style={[home.otherItemText, {color: idx%2==0?'#cc569b':'#9247bf'}]}>{this.days[new Date(item.dt * 1000).getDay()]}</Text>
                                    <Text style={[home.otherItemText, {color: idx%2==0?'#cc569b':'#9247bf'}]}>{Math.floor(item.temp.day)}</Text>
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