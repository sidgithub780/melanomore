import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const setAsyncStorage = async (value) => {
  let theKey = uuid.v4();
  try {
    await AsyncStorage.setItem(theKey, value);
    return theKey;
  } catch (e) {
    console.log(e);
  }
};

const getAsyncStorage = async (storageKey) => {
  try {
    await AsyncStorage.getItem(storageKey);
    if (value !== null) {
      return value;
    }
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

  return values;
};

export {
  setAsyncStorage,
  getAsyncStorage,
  deleteAsyncStorage,
  getAllKeyValuePairsAsyncStorage,
};
