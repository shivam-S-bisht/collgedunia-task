import { create } from 'apisauce'
import key from '../context'

import GetLocation from 'react-native-get-location'


export const getGeoLocation = () => {

    return async (dispatch) => {

        await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                this.api.get(`/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=minutely,hourly&appid=${key}&units=metric`)
                    .then(res => {
                        if (res.status == 200) {
                            dispatch({ type: "FETCH_DATA_SUCCESS", data: res.data })
                        } else {

                            dispatch({ type: "FETCH_DATA_FAILURE", message: err })
                        }
                    })
                    .catch(err => {
                        dispatch({ type: "FETCH_DATA_FAILURE", message: err })
                    })
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })

    }

}



api = create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    headers: { Accept: 'application/vnd.github.v3+json' },
    timeout: 2000
})


// export const fetchData = (lat, lon) => {


//     return (dispatch) => {
//         console.log(lat, lon)

//         this.api.get(`/forecast?q=Delhi&appid=${key}&units=metric`)
//             .then(res => {
//                 if (res.status == 200) {
//                     // console.log(res.data)
//                     dispatch({ type: "FETCH_DATA_SUCCESS", data: res.data })
//                 } else {

//                     dispatch({ type: "FETCH_DATA_FAILURE", message: err })
//                 }
//             })
//             .catch(err => {
//                 dispatch({ type: "FETCH_DATA_FAILURE", message: err })
//             })
//     }
// }

export const retry = () => {
    return (dispatch) => {
        dispatch({ type: "RETRY" })
    }
}
