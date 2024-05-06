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
    scrollContainer: {
        backgroundColor: '#121212'
    },
    pokemon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: 200
    },
    image: {
        resizeMode: 'contain',
        flex: .6,
        aspectRatio: .5
    },
    text: {
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 30,
        margin: 5,
        marginTop: 7
    }
})