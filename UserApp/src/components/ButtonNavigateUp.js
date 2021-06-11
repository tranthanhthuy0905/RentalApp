import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ButtonNavigateUp = props => {
  const navigateUp = () => {
    console.warn('Navigate Up');
  };
  return (
    <TouchableOpacity onPress={() => navigateUp()}>
      <FontAwesome5 name={'arrow-left'} style={styles.returnButton} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  returnButton: {
    fontSize: RFValue(20),
    marginLeft: RFValue(10),
    marginTop: RFValue(10),
  },
});

export default ButtonNavigateUp;
