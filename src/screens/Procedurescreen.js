import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import React from 'react';

import Screen from '../components/Screen';
import SmallButton from '../components/SmallButton';

const Procedurescreen = ({ navigation }) => {
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
          Procedure
        </Text>
      </View>
      <ScrollView>
        <Text style={styles.textStyle}>
          Step 1: A user selects an image from their camera roll.
        </Text>
        <Text style={styles.textStyle}>
          Step 2: This image is passed into our Tensorflow Javascript machine
          learning model.
        </Text>
        <Text style={styles.textStyle}>
          Step 2.1: Our model is written with Keras and Tensorflow in Python. We
          then used a TensorflowJS converter in Python to create a model.json
          file that we could use with our React Native application.
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'https://colab.research.google.com/drive/17-eb4-qoKV82GbdScabbPHVsf2o_kUAq?usp=sharing'
            );
          }}
        >
          <Text style={[styles.textStyle, styles.redStyle]}>
            Press here for Python Code for ML Model
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          Step 2.2: Our model is a Convolutional Neural Network, that is trained
          on a dataset containing 10,000 images of both benign and malignant
          moles to provide the best accuracy. This is in the melanoma_data
          folder in the Python code.
        </Text>
        <Text style={styles.textStyle}>
          Step 2.3: Our model is trained on 15 epochs. An epoch is iteration
          that the model completes over the training data to become "smarter".
          We decided upon 15 epochs to minimize underfitting and overfitting.
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'https://drive.google.com/file/d/1BD4TAI-gh5ujn7_xnzrU0bDQGll5AR0q/view?usp=sharing'
            );
          }}
        >
          <Text style={[styles.textStyle, styles.redStyle]}>
            Press here for 91% model accuracy after 15 epoch training
          </Text>
        </TouchableOpacity>

        <Text style={styles.textStyle}>
          Step 3: The well-trained classification model returns either 0 or 1,
          which maps to Not Melanoma or Melanoma. This data is then presented to
          the user.
        </Text>

        <Text style={styles.textStyle}>
          DISCLAIMER: This app is not a substitute for professional medical
          help.
        </Text>

        <Text style={styles.textStyle}>{'\n \n \n'} </Text>
      </ScrollView>
    </Screen>
  );
};

export default Procedurescreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  textStyle: {
    fontFamily: 'CourierPrime-Regular',
    fontSize: 20,
    paddingVertical: 7,
  },
  redStyle: {
    color: 'red',
  },
});
