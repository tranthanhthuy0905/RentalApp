import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import ButtonsNavigate from '../components/ButtonsNavigate';

const SplashScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text adjustsFontSizeToFit style={styles.title}>
          To Bike or to Bice? That is the question
        </Text>
        <View style={styles.logo}>
          <Text>LOGO</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <ButtonsNavigate text={'Log In'} numsButton={2} />
        <ButtonsNavigate text={'Sign Up'} numsButton={2} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#E8EAED',
  },

  titleContainer: {
    marginTop: RFValue(20),
    padding: RFValue(14),
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    marginBottom: RFValue(30),
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8EAED',
    width: '80%',
  },
});

export default SplashScreen;
