import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import RoundButtonIcon from '../components/RoundButtonIcon';
import BottomNavigationTab from '../components/bottomNavigationTab';

const HomeScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.logoWrapper}>
          <Text style={styles.logo}>Logo</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.accWrapper}>
            <Text style={styles.accLogo}>Acc</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.functionsContainer}>
        <View style={styles.row}>
          <RoundButtonIcon text={'motorcycle'} color={'white'} />
          <RoundButtonIcon text={'key'} color={'white'} />
          <RoundButtonIcon text={'shipping-fast'} color={'white'} />
        </View>

        <View style={styles.row}>
          <RoundButtonIcon text={'dumbbell'} color={'white'} />
          <RoundButtonIcon text={'flower'} color={'white'} />
          <RoundButtonIcon text={'utensils'} color={'white'} />
        </View>
      </View>
      <BottomNavigationTab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#E8EAEB',
  },

  topView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(15),
    height: RFValue(50),
  },

  accWrapper: {
    backgroundColor: 'white',
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(25),
    justifyContent: 'center',
    alignItems: 'center',
  },

  functionsContainer: {
    flex: 9,
    backgroundColor: '#C5E5E5',
    marginTop: RFValue(10),
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: RFValue(25),
  },
});

export default HomeScreen;
