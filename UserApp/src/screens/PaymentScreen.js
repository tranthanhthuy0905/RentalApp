import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import RoundButtonIcon from '../components/RoundButtonIcon';
import BottomNavigationTab from '../components/bottomNavigationTab';

const PaymentScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <View style={styles.inputContainer}>
        <Text>Add Debit Card or Credit Card</Text>
        <TextInput
          style={styles.cardNumber}
          maxLength={12}
          placeholder={'xxxx xxxx xxxx xxxx'}
          KeyboardType={'numeric'}
        />
        <View style={styles.cardDetail}>
          <View style={styles.dateMonth}>
            <TextInput
              placeholder={'mm'}
              KeyboardType={'numeric'}
              style={styles.box}
            />
            <TextInput
              placeholder={'yyyy'}
              KeyboardType={'numeric'}
              style={styles.box}
            />
          </View>
          <TextInput
            placeholder={'CVC'}
            KeyboardType={'numeric'}
            style={styles.CVCbox}
          />
        </View>
      </View>
      <View style={styles.fakeView}></View>
      <BottomNavigationTab />
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
  title: {
    fontSize: RFValue(25),
    fontWeight: 'bold',
  },

  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: RFValue(15),
  },

  cardNumber: {
    marginVertical: RFValue(15),
    backgroundColor: 'white',
    width: '70%',
    height: RFValue(30),
    fontSize: RFValue(16),
    paddingHorizontal: RFValue(15),
    borderRadius: 25,
  },

  cardDetail: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(20),
  },

  dateMonth: {
    width: '50%',
    height: RFValue(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  box: {
    width: '60%',
    height: RFValue(30),
    marginLeft: RFValue(7),
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: RFValue(15),
  },

  CVCbox: {
    backgroundColor: 'white',
    width: RFValue(60),
    borderRadius: 25,
    paddingHorizontal: RFValue(15),
  },
  fakeView: {
    flex: 9,
  },
});

export default PaymentScreen;
