import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Screen from '../components/Screen';

const Resultscreen = () => {
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
    </Screen>
  );
};

export default Resultscreen;

const styles = StyleSheet.create({});
