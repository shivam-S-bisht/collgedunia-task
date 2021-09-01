import { StyleSheet } from "react-native";

const global = StyleSheet.create({
    center: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    }
})


const home = StyleSheet.create({

    topview: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fad5cb',
    },
    
    displayView: {
        // flex: 1,
        flexGrow: 1
    },
    
    shownTemp: {
        fontSize: 120,
        // color: '#000',
        color: '#3766d4',

    },
    
    shownCity: {
        fontSize: 35,
        color: '#457dff'
    },
    
    others: {
        flexGrow: 1,
    },
    
    otherItem: {
        // backgroundColor: '#e0b5fa',
        borderColor: '#acaffa',
        borderTopWidth: 1,
        paddingHorizontal: 40,
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    otherItemText: {
        fontSize: 28
    }

})


const error = StyleSheet.create({

    topview: {
        padding: 30,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 100,
        backgroundColor: '#444'
    },

    message: {
        fontSize: 60,
        color: '#ce252b',
        fontWeight: 'bold'
    },

    retryTouchable: {
        borderColor: '#ff9100',
        borderWidth: 1,
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#ffc200'
    },

    retryText: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#000',
        fontWeight: 'bold'
    }
})


export { home, global, error }