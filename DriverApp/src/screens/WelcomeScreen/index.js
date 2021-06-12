
import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from "./styles";
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignUp from '../SignUp';

const WelcomeScreen = () => {

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Logo */}
        <Text style={styles.logoSetting}>Logo here!</Text>

        {/* Welcome Sentence */}
        <Text style={styles.basicSetting}>Show them what you can provide!</Text>

        {/* Sign Up */}
        {/*<Button*/}
        {/*    title="SignUp"*/}
        {/*    onPress={() => this.props.navigation.navigate('SignUp')}*/}
        {/*    style={styles.boxContainer}*/}
        {/*/>*/}

        <TouchableOpacity style={styles.boxContainer}>
          <Text style={styles.accessAcc}>Sign Up</Text>
        </TouchableOpacity>
        {/*<View style={styles.boxContainer}>*/}
        {/*  <Text style={styles.accessAcc}>Sign Up</Text>*/}
        {/*</View>*/}
        {/*<View style={styles.boxContainer}>*/}
        {/*  <Text style={styles.accessAcc}>Log In</Text>*/}
        {/*</View>*/}
        <TouchableOpacity style={styles.boxContainer}>
          <Text style={styles.accessAcc}>Log In</Text>
        </TouchableOpacity>

        {/* Bike Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/WelcomeBike/bikeWelcome.png')}
            style={styles.bikeImage}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;
