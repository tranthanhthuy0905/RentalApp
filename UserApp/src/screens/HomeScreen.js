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
import ButtonBottom from '../components/ButtonBottom';

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
          <RoundButtonIcon text={'transit'} />
          <RoundButtonIcon text={'rental'} />
          <RoundButtonIcon text={'shipping'} />
        </View>

        <View style={styles.row}>
          <RoundButtonIcon text={'gym'} />
          <RoundButtonIcon text={'flower'} />
          <RoundButtonIcon text={'food'} />
        </View>
      </View>

      <View style={styles.bottomView}>
        <ButtonBottom btnName="user-friends" />
        <ButtonBottom btnName="wallet" />
        <ButtonBottom btnName="home" />
        <ButtonBottom btnName="history" />
        <ButtonBottom btnName="percentage" />
      </View>
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

export default HomeScreen;
