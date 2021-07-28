import React from 'react';
import { SafeAreaView} from 'react-native';
import { defaultStyles } from '../styles/styles';
import { Header } from '../components/Header';
import {Filtros} from '../components/Filtros';

export const HomeScreen = () => {


    return(
        <SafeAreaView style={[defaultStyles.container, defaultStyles.containerTop]}>
               <Header/>
               <Filtros/>           
        </SafeAreaView>
    );
}

