import { Animated } from "react-native"

const intialState = {
    data: [
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

    ],
    error: false,
    message: null,
    progress: new Animated.Value(0),
    lat: 28,
    lon: 77
}

const fetchReducer = (state=intialState, action) => {

    switch (action.type) {
        case "FETCH_DATA_START": return Object.assign ({}, state)
        case "FETCH_DATA_SUCCESS": return Object.assign({}, state, {data: action.data, error: false})
        case "FETCH_DATA_FAILURE": return Object.assign({}, state, {message: action.message, error: true})

        case "RETRY": return Object.assign({}, state, {progress: new Animated.Value(0)})

        default: return state
    }
    
}

export default fetchReducer