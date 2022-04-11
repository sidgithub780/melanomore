import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import { Ionicons } from '@expo/vector-icons';
import SmallButton from '../components/SmallButton';

const SpecificResultScreen = ({ route, navigation }) => {
  return (
    <Screen>
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
        </Text>
      </View>
      <Image
        source={{ uri: route.params.imageURI }}
        style={{ width: 50, height: 50 }}
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
