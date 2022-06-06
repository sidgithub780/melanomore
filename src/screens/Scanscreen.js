<<<<<<< HEAD
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
=======
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
>>>>>>> parent of 5ed5393 (commit)

import { getPredictions, setup } from '../functions/ML';

import { Ionicons } from '@expo/vector-icons';
import { OpenImages } from '../functions/OpenImages';

import Screen from '../components/Screen';

import { setAsyncStorage } from '../functions/AsyncFunctions';

const Scanscreen = ({ navigation }) => {
<<<<<<< HEAD
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setup();
  });

=======
>>>>>>> parent of 5ed5393 (commit)
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
          style={[styles.bigButton, styles.shadowProp]}
          onPress={async () => {
            const imageURI = await OpenImages();

            if (imageURI !== null) {
<<<<<<< HEAD
              try {
                setLoading(true);
                const pred = await getPredictions(imageURI);
                alert('occurred');
                setLoading(false);
                const theValue = await setAsyncStorage(imageURI);
                navigation.navigate('Specific Results', {
                  imageURI: theValue,
                  mlflag: true,
                  pred: pred,
                });
              } catch (e) {
                console.log(e);
              }
=======
              const pred = await getPredictions(imageURI);
              alert(pred);
              //const theValue = await setAsyncStorage(imageURI);
              //navigation.navigate('Specific Results', {
              //imageURI: theValue,
              //mlflag: true,
              //});
>>>>>>> parent of 5ed5393 (commit)
            }
          }}
        >
          <Ionicons name='camera' size={165} style={{ alignSelf: 'center' }} />
          <Text style={styles.buttonText}>Detect</Text>
        </TouchableOpacity>
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
});
