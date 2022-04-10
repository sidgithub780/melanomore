import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Screen from '../components/Screen';
import PastResult from '../components/PastResult';

const Resultscreen = ({ navigation }) => {
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
        Past Results
      </Text>
      <PastResult
        diagnosis='melanoma'
        onPress={() => {
          navigation.navigate('Specific Results', { diagnosis: 'melanoma' });
        }}
      />
      <PastResult
        diagnosis='not melanoma'
        onPress={() => {
          navigation.navigate('Specific Results', {
            diagnosis: 'not melanoma',
          });
        }}
      />
      <PastResult
        diagnosis='melanoma again'
        onPress={() => {
          navigation.navigate('Specific Results', {
            diagnosis: 'melanoma again',
          });
        }}
      />
    </Screen>
  );
};

export default Resultscreen;

const styles = StyleSheet.create({});
