import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import RoundButtonIcon from '../components/RoundButtonIcon';

const WaitingDriverScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Text>Driver Image</Text>
      </View>
      <Text style={styles.driverName}>Nguyễn Văn Tài</Text>
      <View style={styles.vehicleDetailContainer}>
        <Text>YAMAHA</Text>
        <Text>29A-01232</Text>
      </View>
      <View style={styles.btnContainer}>
        <RoundButtonIcon text={'phone'} color={'white'} />
        <RoundButtonIcon text={'envelope'} color={'white'} />
      </View>
      <View style={styles.mapContainer}>
        <Text>Here is the map</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E8EAED',
    alignItems: 'center',
  },

  imageContainer: {
    width: RFValue(120),
    height: RFValue(120),
    borderRadius: RFValue(65),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: RFValue(25),
  },

  driverName: {
    fontSize: RFValue(20),
    marginVertical: RFValue(15),
  },

  vehicleDetailContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: RFValue(15),
  },

  btnContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mapContainer: {
    width: '100%',
    height: '55%',
    backgroundColor: 'white',
    marginTop: RFValue(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WaitingDriverScreen;
