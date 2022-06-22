import { Dimensions } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';
import { Base64Binary } from '../utils/b64.js';

const BITMAP_DIMENSION = 50;
const TENSORFLOW_CHANNEL = 3;
const { height: DEVICE_HEIGHT, width: DEVICE_WIDTH } = Dimensions.get('window');
const results = ['Not Melanoma (BENIGN)', 'Melanoma (MALIGNANT)'];

const crop = async (imageData, maskDimension) => {
  const { uri, width, height } = imageData;
  const cropWidth = maskDimension * (width / DEVICE_WIDTH);
  const cropHeight = maskDimension * (height / DEVICE_HEIGHT);
  const actions = [
    {
      crop: {
        originX: width / 2 - cropWidth / 2,
        originY: height / 2 - cropHeight / 2,
        width: cropWidth,
        height: cropHeight,
      },
    },
    {
      resize: {
        width: BITMAP_DIMENSION,
        height: BITMAP_DIMENSION,
      },
    },
  ];
  const saveOptions = {
    compress: 1,
    format: ImageManipulator.SaveFormat.JPEG,
    base64: true,
  };
  return await ImageManipulator.manipulateAsync(uri, actions, saveOptions);
};

const convertToTensor = async (base64) => {
  const uIntArray = Base64Binary.decode(base64);
  const decodedImage = decodeJpeg(uIntArray, 3);
  return decodedImage.reshape([
    1,
    BITMAP_DIMENSION,
    BITMAP_DIMENSION,
    TENSORFLOW_CHANNEL,
  ]);
};

const predict = async (model, tensor) => {
  const output = await model.predict(tensor);
  return output.dataSync();
};

export const process = async (image, setDiagnosis, setProcessing) => {
  setProcessing('Cropping image...');

  const croppedData = await crop(image, 300);

  setDiagnosis(0.1);

  setProcessing('Loading model...');

  console.log('image is cropped');

  await tf.setBackend('cpu');

  await tf.ready();
  const modelJSON = require('../assets/newest_models/model.json');
  const modelWeights = require('../assets/newest_models/group1-shard1of1.bin');
  const model = await tf.loadLayersModel(
    bundleResourceIO(modelJSON, modelWeights)
  );

  setDiagnosis(0.4);

  console.log('model loaded');

  setProcessing('Converting to tensor...');

  const tensor = await convertToTensor(croppedData.base64);

  setDiagnosis(0.5);

  console.log('converted to tensor');

  setProcessing('Predicting...');

  const prediction = await predict(model, tensor);

  console.log('predicted');

  const highestPrediction = prediction.indexOf(
    Math.max.apply(null, prediction)
  );

  setProcessing('Done!');
  setDiagnosis(0);

  console.log(results[prediction[0]]);

  //setDiagnosis(results[prediction[0]]);
  setProcessing(false);

  return results[prediction[0]];
};
