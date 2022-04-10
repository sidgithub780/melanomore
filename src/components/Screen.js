import { StyleSheet, Dimensions, View } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop:
      Constants.statusBarHeight + Dimensions.get('window').height / 15,
    marginHorizontal: Dimensions.get('window').width / 12.5,
  },
});

export default Screen;
