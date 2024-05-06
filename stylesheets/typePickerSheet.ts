import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#121212'
        // height: '100%',
        // width: '100%'
    },
    cardContainer: {
        flex: 1, 
        // justifyContent: 'space-around'
        // height: '11%',
        // width: '100%'
    },
    card: {
        flex: 1, 
        backgroundColor: '#404040',
        justifyContent: 'space-around',
        margin: 5
        // height: '100%',
        // width: '50%'
    }, 
    svgContainer: {
        flex: .33,
        justifyContent: 'space-around'
    },
    textContainer: {
        flex: .66,
        justifyContent: 'center',
    }, 
    text: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 18
    },
    image: {
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 5
    }
})
