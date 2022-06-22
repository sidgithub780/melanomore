import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

import { OpenImages } from '../functions/OpenImages';

import Screen from '../components/Screen';

import { setAsyncStorage } from '../functions/AsyncFunctions';

import { process } from '../functions/tf';

const Scanscreen = ({ navigation }) => {
  const [diagnosis, setDiagnosis] = useState(0);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [progressBar, setProgressBar] = useState(false);

  return (
    <Screen>
      <Text
        style={{
          fontFamily: 'CourierPrime-Regular',
          fontSize: 36,
          shadowColor: 'black',
          shadowOpacity: 0.25,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          paddingVertical: 10,
        }}
      >
        Scan
      </Text>
      <Text style={{ fontFamily: 'CourierPrime-Regular', fontSize: 16 }}>
        Select an Image from your camera roll. Crop the image and place the mole
        in the center of the image for best results.
      </Text>
      <View style={styles.centerThis}>
        <TouchableOpacity
          disabled={disabled}
          style={[styles.bigButton, styles.shadowProp]}
          onPress={async () => {
            const image = await OpenImages();

            console.log(image);

            if (image !== null) {
              try {
                setDisabled(true);
                setProgressBar(true);
                imageURI = image.uri;
                const res = await process(image, setDiagnosis, setProcessing);
                const jsonValue = await JSON.stringify({ res, imageURI });
                console.log(res);
                console.log(jsonValue);
                await setAsyncStorage(jsonValue);
                setDisabled(false);
                setProgressBar(false);
                navigation.navigate('Specific Results', {
                  imageURI: imageURI,
                  res: res,
                  mlflag: true,
                });
              } catch (e) {
                console.log(e);
              }
            }
          }}
        >
          <Ionicons name='camera' size={165} style={{ alignSelf: 'center' }} />
          <Text style={styles.buttonText}>Detect</Text>
        </TouchableOpacity>

        {progressBar ? (
          <Progress.Bar
            progress={diagnosis}
            width={200}
            style={styles.progressBar}
          />
        ) : null}

        <Text>{processing}</Text>
      </View>
    </Screen>
  );
};

export default Scanscreen;

const styles = StyleSheet.create({
  bigButton: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 150,
    width: 260,
    height: 260,
    justifyContent: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  centerThis: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  imageStyle: {
    width: '90%',
    height: '40%',
    borderRadius: 15,
    alignSelf: 'center',
  },
  progressBar: {
    marginTop: 25,
  },
});
