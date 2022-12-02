import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import Style from './Styles';

function Home({ navigation }) {
    return (
        <SafeAreaView style={Style.background}>
            <View style={Style.containerlogo} >
                <Image source={require('./assets/logo3.png')} />
            </View>
            <View style={Style.container}>
                <Text style={Style.textSimple}>
                    Clique no botão para efetuar a correção da prova.
                </Text>
            </View>
            <View style={Style.container}>
                <TouchableOpacity style={Style.buttonSubmit}
                    onPress={() => {
                        navigation.navigate('Adicionais')
                    }}>
                    <Text style={Style.textSubmit}>Escanear Gabarito</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default Home;