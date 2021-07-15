import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import {loginStyles, defaultStyles} from '../styles/styles';

export const LoginScreen = () => {
    return(
        <View style={defaultStyles.container}>
            <View style={loginStyles.form}>
                <Image source={require('../assets/images/logo.png')} style={loginStyles.logo}></Image>
                <View style={[defaultStyles.horizontalView, loginStyles.inputView]}>
                    <Image source={require('../assets/images/mail.png')} style={loginStyles.icone}></Image>
                    <TextInput style={loginStyles.input} placeholder="Digite seu e-mail"/>
                </View>
                <View style={[defaultStyles.horizontalView, loginStyles.inputView]}>
                    <Image source={require('../assets/images/lock.png')} style={loginStyles.icone}></Image>
                    <TextInput secureTextEntry={true} style={loginStyles.input} placeholder="Digite sua senha"/>
                </View>

                <TouchableOpacity style={loginStyles.button} onPress={() => {}}>
                    <Text style={loginStyles.buttonText}>Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

