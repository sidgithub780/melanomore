import {
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  Linking,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import Screen from '../components/Screen';

import Btn from '../components/Btn';
import { Ionicons } from '@expo/vector-icons';

import Yelp from '../api/Yelp';
import { getInfo } from '../functions/YelpFunction';

import uuid from 'react-native-uuid';

const Doctorscreen = () => {
  const [information, setInformation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');

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
        Doctors
      </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder='Enter location'
        value={location}
        onChangeText={(term) => {
          setLocation(term);
        }}
      />
      <Text>{location}</Text>
      <Btn
        icon={<Ionicons name='medical-outline' size={40} />}
        text='fetch'
        desc='oo.'
        onPress={async () => {
          setLoading(true);
          const response = await getInfo(location);

          setInformation(response.data.businesses);

          setLoading(false);
        }}
      />

      {loading ? (
        <ActivityIndicator size='large' />
      ) : (
        <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
          {information !== null ? (
            information.map((element) => (
              <Btn
                icon={<Ionicons name='medical-outline' size={25} />}
                text={element['name']}
                desc={element['display_phone']}
                onPress={() => Linking.openURL(`tel:${element['phone']}`)}
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

export default Doctorscreen;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
