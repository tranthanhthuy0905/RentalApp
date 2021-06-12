import React from 'react';
import {StyleSheet, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import ButtonBottom from '../components/ButtonBottom';

const BottomNavigationTab = props => {
  return (
    <View style={styles.bottomView}>
      <ButtonBottom btnName="user-friends" />
      <ButtonBottom btnName="wallet" />
      <ButtonBottom btnName="home" />
      <ButtonBottom btnName="history" />
      <ButtonBottom btnName="percentage" />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    flex: 1.5,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopLeftRadius: RFValue(50),
    borderTopRightRadius: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomNavigationTab;
