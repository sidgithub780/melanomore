import { Dimensions } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';
import { Base64Binary } from '../utils/b64';
import { image } from '@tensorflow/tfjs';
import * as FileSystem from 'expo-file-system';

const results = ['Not Melanoma', 'Melanoma'];

const transformImageToTensor = async (uri) => {
  //.ts: const transformImageToTensor = async (uri:string):Promise<tf.Tensor>=>{
  //read the image as base64
  const img64 = await FileSystem.readAsStringAsync(uri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  const imgBuffer = tf.util.encodeString(img64, 'base64').buffer;
  const raw = new Uint8Array(imgBuffer);
  let imgTensor = decodeJpeg(raw);
  const scalar = tf.scalar(255);
  //resize the image
  imgTensor = tf.image.resizeNearestNeighbor(imgTensor, [300, 300]);
  //normalize; if a normalization layer is in the model, this step can be skipped
  const tensorScaled = imgTensor.div(scalar);
  //final shape of the rensor
  const img = tf.reshape(tensorScaled, [-1, 50, 50, 1]);
  return img;
};

const predict = async (model, tensor) => {
  const output = await model.predict(tensor);
  return output.dataSync();
};

export const process = async (image, setDiagnosis, setLoading) => {
  console.log('inside process btw');
  await tf.ready();
  const modelJSON = require('../assets/models/model.json');
  const modelWeights = require('../assets/models/group1-shard.bin');
  const model = await tf.loadLayersModel(
    bundleResourceIO(modelJSON, modelWeights)
  );
  console.log('model loaded');

  const tensor = await transformImageToTensor(image);

  console.log('converted to tensor');
  const prediction = await predict(model, tensor);

  console.log('converted to tensor and prediction happened');
  const highestPrediction = prediction.indexOf(
    Math.max.apply(null, prediction)
  );

  console.log(highestPrediction);
  setDiagnosis(results[highestPrediction]);
  setLoading(false);
};
