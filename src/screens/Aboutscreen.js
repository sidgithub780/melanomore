import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Btn from '../components/Btn';
import { clearAsyncStorage } from '../functions/AsyncFunctions';

import Screen from '../components/Screen';
import { Ionicons } from '@expo/vector-icons';

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
      <Text
        style={{
          fontFamily: 'CourierPrime-Regular',
          fontSize: 16,
          marginVertical: 15,
        }}
      >
        Built by:
      </Text>
      <Text
        style={{
          fontFamily: 'CourierPrime-Regular',
          fontSize: 16,
          marginVertical: 15,
        }}
      >
        - Siddhanth is a passionate app developer who enjoys helping his
        community.
      </Text>

      <Text style={{ fontFamily: 'CourierPrime-Regular', fontSize: 16 }}>
        - Shivane is a curious machine learning developer who is eager to create
        more and more community oriented projects.
      </Text>

      <Btn
        icon={<Ionicons name='trash-outline' size={40} />}
        text='Delete all scans.'
        desc='Clear storage permanently.'
        onPress={async () => {
          await clearAsyncStorage();
          alert('All storage cleared!');
        }}
      />
    </Screen>
  );
};

export default Aboutscreen;

const styles = StyleSheet.create({});
