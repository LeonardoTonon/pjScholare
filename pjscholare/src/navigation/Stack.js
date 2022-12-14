import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../views/Home'
import Login from "../views/Login"
import Adicionais from "../views/Adicionais"
import Cam from "../views/Camera/index";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Group >
        <Stack.Group screenOptions={{ headerShown: true, headerTransparent: true }}
        >
            <Stack.Screen name="Home" component={Home}
                options={{ title: '' }}
            />
        </Stack.Group>
        <Stack.Group screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Adicionais" component={Adicionais}
                options={{ title: 'Informações iniciais' }} />
        </Stack.Group>
        <Stack.Group screenOptions={{ headerShown: true, headerTransparent: true }} >
            <Stack.Screen name="Cam" component={Cam}
                options={{ title: '' }}
            />
        </Stack.Group>
    </Stack.Navigator>
)