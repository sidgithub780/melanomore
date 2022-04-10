import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const Btn = ({ icon, text, desc, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      <View style={{ marginLeft: 15 }}>
        <Text style={{ fontSize: 18 }}>{text}</Text>
        <Text
          style={{
            fontSize: 14,
            color: '#999999',
          }}
        >
          {desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get('window').height / 35,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: Dimensions.get('window').height / 7.5,
    backgroundColor: '#CDEDFD',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default Btn;
