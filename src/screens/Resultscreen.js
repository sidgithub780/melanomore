import { StyleSheet, Text, ScrollView, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import Screen from '../components/Screen';
import PastResult from '../components/PastResult';

import SmallButton from '../components/SmallButton';

import { getAllKeyValuePairsAsyncStorage } from '../functions/AsyncFunctions';

const handleSubmit = async () => {
  let onlyImages = [];
  let result = await getAllKeyValuePairsAsyncStorage();
  result.forEach((element) => onlyImages.push(element[1]));
  console.log(onlyImages);
  if (onlyImages.length === 0) {
    alert('No scans currently stored.');
  }
  return onlyImages;
};

const Resultscreen = ({ navigation }) => {
  const [scans, setScans] = useState(null);

  useEffect(async () => {
    const result = await handleSubmit();
    setScans(result);
  }, []);

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
      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingHorizontal: 10, flex: 1 }}>
          {scans !== null ? (
            scans.map((imageURI) => (
              <PastResult
                diagnosis='melanoma'
                imageURI={imageURI}
                onPress={() => {
                  navigation.navigate('Specific Results', {
                    imageURI: imageURI,
                  });
                }}
              />
            ))
          ) : (
            <Text fontFamily='CourierPrime-Regular'>
              There are currently no scans.
            </Text>
          )}
        </ScrollView>
      </View>
    </Screen>
  );
};

export default Resultscreen;

const styles = StyleSheet.create({});
