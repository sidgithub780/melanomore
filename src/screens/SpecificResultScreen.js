import { StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';

const SpecificResultScreen = ({ route }) => {
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
        Specific Results
      </Text>
      <Image
        source={{ uri: route.params.imageURI }}
        style={{ width: 100, height: 100 }}
      />
    </Screen>
  );
};

export default SpecificResultScreen;

const styles = StyleSheet.create({});
