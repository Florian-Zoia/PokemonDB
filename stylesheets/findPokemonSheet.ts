import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#121212'
    },
    textField: {
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        color: '#FFFFFF'
    },
    text: {
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
        marginTop: 7
    },
    textsecondary: {
        textAlign: 'center',
        color: '#B3B3B3',
        fontSize: 18
    },
    flatlist: {
        justifyContent: 'center',
        textAlign: 'center',
        flex: .3,
        marginTop: 15
    },
    buttonView: {
        flex: .1,
        justifyContent: 'center',
        alignContent: 'center',
        width: '66%',
        height: '100%',
        left: '31.5%',
        marginTop: 15
    },
    button: {
        flex: 1,
        width: '50%',
        height: '100%',
        color: '#FFFFFF',
        margin: 7,
        backgroundColor: '#404040'
    }
})
