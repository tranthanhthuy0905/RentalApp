import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import ButtonNavigateUp from '../components/ButtonNavigateUp';

const Header = props => {
  return (
    <View style={styles.topView}>
      <ButtonNavigateUp />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
  },

  title: {
    marginLeft: RFValue(100),
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
});

export default Header;
