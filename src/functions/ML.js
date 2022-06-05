import * as tf from '@tensorflow/tfjs';
import { setWasmPath } from '@tensorflow/tfjs-backend-wasm';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';
import * as FileSystem from 'expo-file-system';
//import wasmPATH from '../../node_modules/@tensorflow/tfjs-backend-wasm/dist/tf-backend-wasm';

const loadModel = async () => {
  const modelJSON = require('../assets/models/model.json');
  const modelWeights = require('../assets/models/group1-shard.bin');
  const model = await tf
    .loadLayersModel(bundleResourceIO(modelJSON, modelWeights))
    .catch((e) => {
      console.log('Error', e);
    });

  return model;
};

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

const makePredictions = async (batch, model, imagesTensor) => {
  //.ts: const makePredictions = async (batch:number, model:tf.LayersModel,imagesTensor:tf.Tensor<tf.Rank>):Promise<tf.Tensor<tf.Rank>[]>=>{
  //cast output prediction to tensor
  const predictionsdata = await model.predict(imagesTensor);
  //.ts: const predictionsdata:tf.Tensor = model.predict(imagesTensor) as tf.Tensor
  let pred = predictionsdata.split(batch); //split by batch size
  //return predictions
  return pred;
};

//https://blog.tensorflow.org/2020/03/introducing-webassembly-backend-for-tensorflow-js.html
const getPredictions = async (image) => {
  const tensor_image = await transformImageToTensor(image);
  const predictions = await makePredictions(1, model, tensor_image);
  return predictions;
};

const setup = async () => {
  setWasmPath('../assets/tfjs-backend-wasm.wasm');
  await tf.setBackend('wasm');
  await tf.ready();
  const model = loadModel();
};

export { getPredictions, setup };
