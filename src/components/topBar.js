import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
//import TextArea from 'antd/es/input/TextArea';

const TopBar = props => {
  return (
    <View style={styles.container}>
      <View styles={styles.logoContainer}>
        <TouchableOpacity>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logoStyle}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.nameStyle}>{props.text}</Text>
      </View>
      <View style={styles.logoContainer}>
        <TouchableOpacity>
          <Image
            source={require('../assets/avatar.png')}
            style={styles.avatarStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TopBar;

const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#A1DDA7',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 100,
  },
  logoContainer: {
    flex: 1,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 2,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarStyle: {
    borderRadius: 30,
    padding: 1,
    height: 60,
    width: 60,
    marginHorizontal: 10,
  },
  logoStyle: {
    borderRadius: 30,
    padding: 1,
    height: 80,
    width: 90,
    marginHorizontal: 15,
  },
  nameStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#468446',
    marginHorizontal: 10,
  },
});
