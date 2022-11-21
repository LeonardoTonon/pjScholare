import React from "react";
import {LoadingView, Camera} from "react-native-vision-camera";
import {View, Text, SafeAreaView, Image, TouchableOpacity} from "react-native";




function Cam() {
    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back
  
    if (device == null) return <LoadingView />
    return (
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    )
  }

  export default Cam;