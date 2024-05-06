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
    singleCard: {
        flex: .3,
        justifyContent: 'center',
        alignContent: 'center',
        width: '66%',
        left: '16.1515151%'
    }, 
    singleCardContainer: {
        flex: 1, 
        flexDirection: 'row'
    },
    text: {
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
        marginTop: 7
    }
})