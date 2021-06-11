import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ButtonBottom = props => {
  return (
    <TouchableOpacity onPress={() => props.function}>
      <View style={styles.btnWrapper}>
        <FontAwesome5 name={props.btnName} style={styles.bottomIcon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: RFValue(15),
    marginHorizontal: RFValue(5),
  },

  bottomIcon: {
    fontSize: RFValue(27),
  },
});

export default ButtonBottom;
