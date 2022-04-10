import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const SmallButton = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.overallButton} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <Ionicons name={icon} size={35} style={styles.iconStyle} />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SmallButton;

const styles = StyleSheet.create({
  overallButton: {
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
  iconStyle: {
    paddingHorizontal: 10,
  },
});
