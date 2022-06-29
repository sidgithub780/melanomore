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
        About
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
