import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const PastResult = ({ diagnosis, onPress, imageURI }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{diagnosis}</Text>
      <Image source={{ uri: imageURI }} style={{ width: 50, height: 50 }} />
    </TouchableOpacity>
  );
};

export default PastResult;

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get('window').height / 35,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: Dimensions.get('window').height / 7.5,
    backgroundColor: '#CDEDFD',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
