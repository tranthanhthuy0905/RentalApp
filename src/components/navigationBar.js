import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
//import TextArea from 'antd/es/input/TextArea';

const NavBar = props => {
  return (
    <View
      style={styles.navbarContainer}>
      {/*styles.navbarContainer}>*/}
      <TouchableOpacity>
        <Image
          source={require('../assets/NavBar/Home.png')}
          style={styles.elementStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/NavBar/friends.png')}
          style={styles.elementStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/NavBar/history.png')}
          style={styles.elementStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navbarContainer: {

      backgroundColor: '#ECF8ED',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    paddingVertical: 20,
    //justifyContent: 'flex-end',
  },
  elementStyle: {},
});
