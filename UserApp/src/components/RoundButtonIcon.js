import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const RoundButtonIcon = props => {
  return (
    <TouchableOpacity>
      <View style={[styles.buttonWrapper, {backgroundColor: props.color}]}>
        <FontAwesome5 name={props.text} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: RFValue(40),
    marginHorizontal: RFValue(30),
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: RFValue(18),
  },
});

export default RoundButtonIcon;
