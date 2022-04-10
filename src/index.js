import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/TabNavigator';
import { LoadFonts } from './functions/LoadFonts';

const App = () => {
  let [fontsLoaded] = LoadFonts();

  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      />
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
