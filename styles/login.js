import { StyleSheet} from 'react-native';
import colors from '../constants/Colors';
import layout from '../constants/Layout';

export default StyleSheet.create({
 
    form: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    logo: {
        marginBottom: 30,
        width: layout.window.width * 0.6,
        resizeMode: 'contain'
        
    },
    inputView: {
        padding: 10
    },
    icone:{
        marginTop: -18,
        marginRight: 10,
        width: 20,
        resizeMode: 'contain'
    },
    input: {
        marginBottom: 12,
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: 0.01,
        color: colors.primaryColor,
        width: 240,
        borderRadius: 0,
        paddingBottom: 7,

        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: colors.mediumGreyColor,
        borderBottomWidth: 1

    },
    button: {
        marginTop:12,
        width: 272,
        height: 56,
        backgroundColor: colors.primaryColor,
        borderColor: colors.primaryColor,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontFamily: 'biennale-regular',
        fontWeight: 'bold'
    }
});