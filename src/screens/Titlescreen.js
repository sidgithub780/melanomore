import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Screen from '../components/Screen';
import Btn from '../components/Btn';
import { Ionicons } from '@expo/vector-icons';

const Titlescreen = ({ navigation }) => {
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
        }}
      >
        MelaNoMore
      </Text>
      <Text
        style={{
          fontFamily: 'CourierPrime-Regular',
          fontSize: 20,
          shadowColor: 'black',
          shadowOpacity: 0.25,
          shadowOffset: {
            width: 0,
            height: 2,
          },
        }}
      >
        The prime melanoma detector
      </Text>
      <Btn
        icon={<Ionicons name='enter-outline' size={40} />}
        text='Continue'
        desc='Scan an image or view past scans.'
        onPress={() => {
          navigation.navigate('Scan');
        }}
      />
    </Screen>
  );
};

export default Titlescreen;

const styles = StyleSheet.create({});
