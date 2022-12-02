import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Style from './Styles';

function Adicionais({ navigation }) {
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
                    -Fique atento ao foco da imagem.
                </Text>
            </View>
            <TouchableOpacity
                style={Style.buttonAdd}
                onPress={() => {
                    navigation.navigate('Cam')
                }}
            >
                <Text style={Style.textSubmit}>Escanear Gabarito</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Adicionais;