import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#8257E5',
        padding: 40,
    },
    banner: {
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 20, 
        lineHeight: 30,
        marginTop: 80,
    },
    titleBold: {
        fontWeight: 'bold'
    }
});

export default styles;
