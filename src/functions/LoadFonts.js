import { LogBox } from 'react-native';
import { useFonts } from 'expo-font';

LogBox.ignoreLogs(['Overwriting fontFamily style attribute preprocessor']);

export const LoadFonts = () => {
  return useFonts({
    'CourierPrime-Regular': require('../assets/fonts/CourierPrime-Regular.ttf'),
    'CourierPrime-Bold': require('../assets/fonts/CourierPrime-Bold.ttf'),
  });
};
