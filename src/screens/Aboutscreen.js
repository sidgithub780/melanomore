import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Screen from '../components/Screen';

const Aboutscreen = () => {
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
        About Us
      </Text>
      <Text style={{ fontFamily: 'CourierPrime-Regular', fontSize: 16 }}>
        Built by ...
      </Text>
    </Screen>
  );
};

export default Aboutscreen;

const styles = StyleSheet.create({});
