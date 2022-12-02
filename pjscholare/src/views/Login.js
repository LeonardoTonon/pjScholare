import React from "react";
import { View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Style from './Styles';

function Login({ navigation }) {
    return (
        <KeyboardAvoidingView style={Style.background}>
            <View style={Style.containerlogo} >
                <Image source={require('./assets/logo2.png')} />
                <Icon name="log-in-outline" size={5} color='#000000' />
            </View>

            <View style={Style.container}>
                <TextInput style={Style.input}
                    placeholder="E-mail"
                    placeholderTextColor="#FFFFFF"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TextInput style={Style.input}
                    placeholder="Senha"
                    placeholderTextColor="#FFFFFF"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

                <TouchableOpacity style={Style.buttonSubmit}
                    onPress={() => {
                        navigation.navigate('Home')
                    }}>
                    <Text
                        style={Style.textSubmit}>
                        <Icon name="log-in-outline"
                            size={22}
                            color="#FFFFFF"
                        />
                        Acessar
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;