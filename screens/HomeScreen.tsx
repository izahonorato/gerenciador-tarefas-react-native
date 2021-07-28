import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { defaultStyles } from '../styles/styles';
import { Header } from '../components/Header';

export const HomeScreen = () => {


    return(
        <View style={[defaultStyles.container, defaultStyles.containerTop]}>
               <Header/>           
        </View>
    );
}

