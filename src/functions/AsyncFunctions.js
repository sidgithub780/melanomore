import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const setAsyncStorage = async (value) => {
  let theKey = uuid.v4();
  try {
    await AsyncStorage.setItem(theKey, value);
    return value;
  } catch (e) {
    console.log(e);
  }
};

const getAsyncStorage = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

const deleteAsyncStorage = async (storageKey) => {
  try {
    await AsyncStorage.removeItem(storageKey);
  } catch (e) {
    console.log(e);
  }
};

const getAllKeyValuePairsAsyncStorage = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.log(e);
  }

  let values;
  try {
    values = await AsyncStorage.multiGet(keys);
  } catch (e) {
    console.log(e);
  }

  return values.map((req) => JSON.parse(req[1]));
};

const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};

export {
  setAsyncStorage,
  getAsyncStorage,
  deleteAsyncStorage,
  getAllKeyValuePairsAsyncStorage,
  clearAsyncStorage,
};
