import React from "react";
import {View, Text, SafeAreaView, Image, TouchableOpacity} from "react-native";
import Style from './Styles';

function Adicionais ({ navigation }) {
    return (
        <SafeAreaView style={Style.containerAdd}>
            <Text style={Style.textAdd}>
             Siga as instruções abaixo:    
            </Text>
            <View style={Style.containerText}>
            <Text style={Style.text}>
            -Garanta que você esteja em um ambiente bem iluminado.
            </Text>
            <Text style={Style.text}>
            -Fique atendo ao foco da imagem.
            </Text>
            </View>
            <TouchableOpacity
            style={Style.buttonAdd}
            onPress={() => {
                navigation.navigate('Adicionais')
            }}
            >
            <Text style={Style.textSubmit}>Escanear QR Code</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Adicionais;