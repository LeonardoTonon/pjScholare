import React, { useRef, useCallback } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Cam() {
  const camera = useRef(<Camera />)
  const [hasPermission, setHasPermission] = React.useState(false);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  async function handlePicture() {
    let takenPicture = await takePicture();
    let imageUri = `file://${takenPicture.path}`;
    let base64Image = await getBase64Image(imageUri);
    let normalizedBase64Image = normalizeBase64Image(base64Image);

    await sendImageToAws(normalizedBase64Image)
  }

  function normalizeBase64Image(base64Image) {
    return base64Image.replace("data:image/jpeg;base64,", "");
  }
  async function takePicture() {
    return await camera.current.takePhoto({ flash: 'off' })
  }

  const getBase64Image = useCallback(
    async (imageUri) => {
      try {
        const blob = await getBlob(imageUri)

        return await blobToBase64(blob)
      } catch (err) {
        Logger.log(err)
      }
    },
    [blobToBase64, getBlob],
  )

  const getBlob = useCallback((fileUri) => {
    return fetch(fileUri).then(
      response => {
        return response.blob()
      },
      error => {
        Logger.log(`Error in converting image to blob - ${error}`)
      },
    )
  }, [])

  const blobToBase64 = useCallback(blob => {
    try {
      const reader = new FileReader()
      reader.readAsDataURL(blob)
      return new Promise(resolve => {
        reader.onloadend = () => {
          resolve(reader.result)
        }
      })
    } catch (err) {
      Logger.log(`Error in converting blob to base64 - ${err}`)
      throw err
    }
  }, [])


  async function sendImageToAws(base64Image) {
    const awsUrl = "https://jhax8x3b6a.execute-api.us-east-1.amazonaws.com/tmp-lambda-efs";

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'Content-Length': base64Image.length,
        'isBase64Encoded': true
      },
      body: base64Image
    }
    console.warn(base64Image.length)
    

    fetch(awsUrl, requestOptions)
      .then(response => response.json())
      .then(aws_response => {
        console.log('AWS Response data: ', aws_response);
      });
  }

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {device != null &&
        hasPermission && (
          <>
            <Camera
              ref={camera}
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={true}
              photo={true}
            />
          </>)}
      <View style={styles.capture}>
      <Icon name="md-scan-circle-sharp" size={100} color='#FFFFFF' onPress={handlePicture} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  capture: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});
