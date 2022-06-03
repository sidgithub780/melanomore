import { StyleSheet, Text, Image, View } from 'react-native';
import React, { useState } from 'react';
import Screen from '../components/Screen';
import { Ionicons } from '@expo/vector-icons';
import SmallButton from '../components/SmallButton';
import Btn from '../components/Btn';

const SpecificResultScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(route.params.mlflag);

  return (
    <Screen>
      {isLoading ? <Text>ml is true</Text> : <Text>ml is false</Text>}

      <View style={styles.header}>
        <SmallButton
          icon='arrow-back'
          text='Back'
          onPress={() => {
            navigation.goBack();
          }}
        />
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
            paddingHorizontal: 10,
          }}
        >
          Specific Results
          {route.params.pred}
        </Text>
      </View>
      <Image
        source={{ uri: route.params.imageURI }}
        style={{ width: 50, height: 50 }}
      />
      <Btn
        text='wow'
        desc='wow'
        onPress={() => {
          alert('wow');
        }}
      />
    </Screen>
  );
};

//<Image
//source={{ uri: route.params.imageURI }}
//style={{ width: 200, height: 200 }}
///>;

export default SpecificResultScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  backButton: {
    backgroundColor: 'lightblue',
    borderRadius: 20,
    height: 40,
    width: '40%',
  },
  buttonText: {
    fontFamily: 'CourierPrime-Regular',
    fontSize: 25,
    alignSelf: 'center',
  },
  arrowStyle: {
    paddingHorizontal: 10,
  },
});
