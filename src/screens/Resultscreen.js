import {
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  View,
} from 'react-native';
import React, { useState, useEffect } from 'react';

import Screen from '../components/Screen';
import PastResult from '../components/PastResult';

import SmallButton from '../components/SmallButton';

import { getAllKeyValuePairsAsyncStorage } from '../functions/AsyncFunctions';

import uuid from 'react-native-uuid';

const handleSubmit = async () => {
  let onlyImages = [];
  let result = await getAllKeyValuePairsAsyncStorage();
  console.log(result);
  result.forEach((element) => onlyImages.push(element));
  if (onlyImages.length === 0) {
    alert('No scans currently stored.');
  }
  return onlyImages;
};

const Resultscreen = ({ navigation }) => {
  const [scans, setScans] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const result = await handleSubmit();
    setScans(result);
    setLoading(false);
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
          setLoading(true);
          const result = await handleSubmit();
          await setScans(result);
          setLoading(false);
        }}
      />

      {loading != false ? (
        <ActivityIndicator size='large' />
      ) : (
        <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
          {scans !== null ? (
            scans.map((element) => (
              <PastResult
                diagnosis={element['res']}
                imageURI={element['imageURI']}
                onPress={() => {
                  navigation.navigate('Specific Results', {
                    imageURI: element['imageURI'],
                    res: element['res'],
                    mlflag: false,
                  });
                }}
                key={uuid.v4()}
              />
            ))
          ) : (
            <Text fontFamily='CourierPrime-Regular'>
              There are currently no scans.
            </Text>
          )}
        </ScrollView>
      )}
    </Screen>
  );
};

export default Resultscreen;

const styles = StyleSheet.create({});
