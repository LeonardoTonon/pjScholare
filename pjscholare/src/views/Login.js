import React from "react";
import { View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput,Text} from "react-native";
import Style from './Styles';

function Login ({ navigation }) {
    return (
        <KeyboardAvoidingView style={Style.background}>
            <View style={Style.containerlogo} >
             <Image source={require('./assets/logo2.png')}/>
            </View>

            <View style={Style.container}>
             <TextInput style={Style.input}
             placeholder="E-mail"
             autoCorrect={false}
             onChangeText = {()=> {}}
             />
             <TextInput style={Style.input}
             placeholder="Senha"
             autoCorrect={false}
             onChangeText = {()=> {}}
             />
            <TouchableOpacity style={Style.buttonSubmit}
            onPress={() => {
                navigation.navigate('Home')
            }}>
            <Text style={Style.textSubmit}>Acessar</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;