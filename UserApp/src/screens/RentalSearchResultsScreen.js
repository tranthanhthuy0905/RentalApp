import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import Header from '../components/Header';

const RentalSearchResultsScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Results'} />
      <ScrollView style={styles.resultsView}>
        {/* The box is a button  */}
        <TouchableOpacity style={styles.motorbikeBox}>
          <Text>Motorbike Image</Text>
          <Text>💛💛💛💛💛</Text>
          <View style={styles.motorbikeDetail}>
            <Text>Yamaha</Text>
            <Text>120.000d/day</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E8EAED',
  },

  resultsView: {
    backgroundColor: 'white',
    marginTop: RFValue(25),
  },

  motorbikeBox: {
    width: '100%',
    height: RFValue(80),
    backgroundColor: '#EAED',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(20),
    borderColor: 'black',
    borderWidth: 1,
  },

  motorbikeDetail: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default RentalSearchResultsScreen;
