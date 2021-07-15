import { StyleSheet} from 'react-native';
import colors from '../constants/Colors';
import loginStyles from './login';


const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    horizontalView:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})



export {loginStyles, defaultStyles}