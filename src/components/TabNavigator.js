import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Resultscreen from '../screens/Resultscreen';
import Scanscreen from '../screens/Scanscreen';
import Titlescreen from '../screens/Titlescreen';
import Aboutscreen from '../screens/Aboutscreen';
import SpecificResultScreen from '../screens/SpecificResultScreen';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Scan = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Detect'
        component={Scanscreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Specific Results'
        component={SpecificResultScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Title'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === 'Title') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === 'Scan') {
            iconName = focused ? 'scan-circle' : 'scan-circle-outline';
          } else if (rn === 'Result') {
            iconName = focused
              ? 'checkmark-circle'
              : 'checkmark-circle-outline';
          } else if (rn === 'About') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name='Title'
        component={Titlescreen}
        options={{ tabBarStyle: { display: 'none' } }}
      />

      <Tab.Screen name='Scan' component={Scan} />

      <Tab.Screen name='Result' component={Resultscreen} />
      <Tab.Screen name='About' component={Aboutscreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
