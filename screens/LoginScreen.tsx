import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import {loginStyles, defaultStyles} from '../styles/styles';
import { executaRequisicao } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = () => {

    const navigation = useNavigation();

    

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErroMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const executaLogin = async () =>{

        try{
            setErroMsg('');

            if(!login || login.length < 5 || !password || password.length < 5){
                setErroMsg('Favor preencher corretamente os dados!');
                setLoading(false);

                return;
            }
            
            const body = {
                login,
                senha: password
            };

            const resultado = await executaRequisicao('login', 'POST', body);
             if(resultado?.data?.token)
             {
                 AsyncStorage.setItem('accessToken', resultado.data.token);
                 AsyncStorage.setItem('usuarioNome', resultado.data.nome);
                 AsyncStorage.setItem('usuarioEmail', resultado.data.email);
                 navigation.navigate('Home');
                 return;
             }
             setErroMsg('Não foi possível efetuar o login, fale com o administrador');
           

        }catch(e){

            if(e?.response?.data?.erro){
                console.log(e?.response?.data);
                setErroMsg(e.response.data.erro);
            }else{
                console.log(e)
                setErroMsg('Não foi possível efetuar o login, fale com o administrador');
            }
            console.log(e)
        }
        setLoading(false);
    }
    return(
        <View style={defaultStyles.container}>
            <View style={loginStyles.form}>
                <Image source={require('../assets/images/logo.png')} style={loginStyles.logo}></Image>

                {errorMsg ? <Text style={defaultStyles.errorMsg}>{errorMsg}</Text> : null}

                <View style={[defaultStyles.horizontalView, loginStyles.inputView]}>
                    <Image source={require('../assets/images/mail.png')} style={loginStyles.icone}></Image>
                    <TextInput style={loginStyles.input} 
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={login}
                    onChangeText={setLogin}/>
                </View>
                <View style={[defaultStyles.horizontalView, loginStyles.inputView]}>
                    <Image source={require('../assets/images/lock.png')} style={loginStyles.icone}></Image>
                    <TextInput secureTextEntry={true} style={loginStyles.input} 
                    placeholder="Digite sua senha"
                    autoCapitalize="none"
                    value={password}
                    onChangeText={setPassword}/>
                </View>

                <TouchableOpacity style={loginStyles.button} onPress={executaLogin}
                disabled={loading}>
                    {
                        loading ? <ActivityIndicator size="small" color="#fff"/>
                         : <Text style={loginStyles.buttonText}>Login</Text>
                    }
                    
                </TouchableOpacity>

            </View>
        </View>
    );
}

