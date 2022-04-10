import { StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';

import Screen from '../components/Screen';
import PastResult from '../components/PastResult';

import SmallButton from '../components/SmallButton';

import { getAllKeyValuePairsAsyncStorage } from '../functions/AsyncFunctions';

const handleSubmit = async () => {
  let onlyImages = [];
  let result = await getAllKeyValuePairsAsyncStorage();
  result.forEach((element) => onlyImages.push(element[1]));
  console.log(onlyImages);
  return onlyImages;
};

const Resultscreen = ({ navigation }) => {
  const [scans, setScans] = useState(null);

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
      <SmallButton
        icon='refresh-outline'
        text='Load'
        onPress={async () => {
          const result = await handleSubmit();
          setScans(result);
        }}
      />
      <PastResult
        diagnosis='melanoma'
        onPress={() => {
          navigation.navigate('Specific Results', { diagnosis: 'melanoma' });
        }}
      />

      <PastResult
        diagnosis='melanoma'
        onPress={() => {
          navigation.navigate('Specific Results', { diagnosis: 'melanoma' });
        }}
      />
      <PastResult
        diagnosis='melanoma'
        onPress={() => {
          navigation.navigate('Specific Results', { diagnosis: 'melanoma' });
        }}
      />
    </Screen>
  );
};

export default Resultscreen;

const styles = StyleSheet.create({});
