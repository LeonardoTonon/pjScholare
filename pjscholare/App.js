import React from "react";
import { View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput,Text} from "react-native";
import Style from './src/views/Styles';

function App (){
    return (
        <KeyboardAvoidingView style={Style.background}>
            <View style={Style.containerlogo} >
             <Image source={require('./src/assets/logo2.png')}/>
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
            <TouchableOpacity style={Style.buttonSubmit}>
            <Text style={Style.textSubmit}>Acessar</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default App;