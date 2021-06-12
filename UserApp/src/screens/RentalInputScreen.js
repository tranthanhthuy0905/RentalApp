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

import ButtonsNavigate from '../components/ButtonsNavigate';
import Header from '../components/Header';

const RentalInputScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'BICE Rental'} />
      <View style={styles.middleView}>
        <View>
          <Text style={styles.text}>Pick Up Location:</Text>
          <TextInput style={styles.inputBox} />
        </View>
        <View>
          <Text style={styles.text}>Return Location:</Text>
          <TextInput style={styles.inputBox} />
        </View>
        <View>
          <Text style={styles.text}>Pick Up Date and Time:</Text>
          <View style={styles.dateTimeBox}>
            <TextInput style={styles.dateBox} placeholder={'dd/mm/yyy'} />
            <TextInput style={styles.timeBox} placeholder={'8:00 PM'} />
          </View>
        </View>
        <View>
          <Text style={styles.text}>Return Date and Time:</Text>
          <View style={styles.dateTimeBox}>
            <TextInput style={styles.dateBox} placeholder={'dd/mm/yyy'} />
            <TextInput style={styles.timeBox} placeholder={'8:00 PM'} />
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <ButtonsNavigate text={'Search'} numsButton={1} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E8EAED',
  },

  topView: {
    flex: 1,
    flexDirection: 'row',
  },

  title: {
    marginLeft: RFValue(100),
    fontSize: RFValue(20),
  },

  inputBox: {
    backgroundColor: 'white',
    width: '80%',
    height: RFValue(30),
    borderRadius: 25,
    marginVertical: RFValue(10),
  },

  dateTimeBox: {
    marginVertical: RFValue(10),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dateBox: {
    width: '50%',
    backgroundColor: 'white',
    height: RFValue(30),
    borderRadius: 25,
    paddingHorizontal: RFValue(15),
  },

  timeBox: {
    width: '30%',
    backgroundColor: 'white',
    height: RFValue(30),
    borderRadius: 25,
    paddingHorizontal: RFValue(15),
  },

  middleView: {
    flex: 7,
    backgroundColor: '#E8EA',
    justifyContent: 'center',
  },

  text: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
  },

  bottomView: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default RentalInputScreen;
