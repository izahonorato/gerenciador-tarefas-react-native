import { StyleSheet} from 'react-native';
import colors from '../constants/Colors';
import layout from '../constants/Layout';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
 
    form: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    logo: {
        marginBottom: RFValue(30),
        width: RFValue(196),
        resizeMode: 'contain'
        
    },
    inputView: {
        padding: RFValue(10)
    },
    icone:{
        marginTop: RFValue(-18),
        marginRight: RFValue(10),
        width: RFValue(20),
        resizeMode: 'contain'
    },
    input: {
        fontFamily: 'biennale-regular',
        marginBottom: RFValue(12),
        fontSize: RFValue(16),
        display: 'flex',
        alignItems: 'center',
        letterSpacing: RFValue(0.01),
        color: colors.primaryColor,
        width: RFValue(240),
        borderRadius: RFValue(0),
        paddingBottom: RFValue(7),

        borderTopWidth: RFValue(0),
        borderLeftWidth: RFValue(0),
        borderRightWidth: RFValue(0),
        borderColor: colors.mediumGreyColor,
        borderBottomWidth: RFValue(1)

    },
    button: {
        marginTop: RFValue(12),
        width: RFValue(272),
        height: RFValue(56),
        backgroundColor: colors.primaryColor,
        borderColor: colors.primaryColor,
        borderRadius: RFValue(12),
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: RFValue(17),
        fontFamily: 'biennale-regular',
        fontWeight: 'bold'
    }

    
});