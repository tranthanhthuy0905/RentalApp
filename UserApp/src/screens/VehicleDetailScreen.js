import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import ButtonsNavigate from '../components/ButtonsNavigate';
import Header from '../components/Header';

const VehicleDetailScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Bice'} />
      <View style={styles.titleBox}>
        <Text style={styles.image}>Motorbike Image</Text>
        <Text>Yamaha</Text>
      </View>

      <View style={styles.detailBox}>
        <View style={styles.box}>
          <Text>Rent Fee</Text>
          <Text>120.000d</Text>
        </View>
        <View style={styles.box}>
          <Text>Duration</Text>
          <Text>3 days</Text>
        </View>
        <View style={styles.box}>
          <Text>Total Rent Fee</Text>
          <Text>360.000d</Text>
        </View>
        <View style={styles.box}>
          <Text>Driver License</Text>
          <Text>A2</Text>
        </View>
      </View>

      <ButtonsNavigate text={'Rent Now'} numsButton={1} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E8EAED',
  },

  titleBox: {
    height: '30%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: RFValue(15),
  },

  image: {
    backgroundColor: 'white',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    paddingHorizontal: RFValue(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default VehicleDetailScreen;
