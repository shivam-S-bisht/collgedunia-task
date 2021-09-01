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
        justifyContent: 'space-between'
    },
    
    displayView: {
        // flex: 1,
        flexGrow: 1
    },
    
    shownTemp: {
        fontSize: 120,
        color: '#000'
    },
    
    shownCity: {
        fontSize: 35,
        color: '#000'
    },
    
    others: {
        flexGrow: 1,
    },
    
    otherItem: {
        borderColor: '#777',
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
        marginVertical: 100
    },

    message: {
        fontSize: 60,
        color: '#000'
    },

    retryTouchable: {
        borderColor: '#777',
        borderWidth: 1,
        padding: 20,
        borderRadius: 5
    },

    retryText: {
        fontSize: 20,
        textTransform: 'uppercase'
    }
})


export { home, global, error }