import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import ButtonsNavigate from '../components/ButtonsNavigate';
import ButtonNavigateUp from '../components/ButtonNavigateUp';

const LogInScreen = props => {
  const defaultText = '0931686114';
  const [inputText, setInputText] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <ButtonNavigateUp />
        <View style={styles.logoWrapper}>
          <Text style={{fontSize: RFValue(30)}}>Logo</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text styles={styles.text}>Please enter your phone number :</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder={defaultText}
            autoFocus={true}
            keyboardType="numeric"
            style={styles.textInput}
            defaultValue={inputText}
            onChangeText={setInputText}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonsNavigate text={'Continue'} numsButton={1} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

  titleContainer: {
    width: '100%',
    height: '30%',
  },

  logoWrapper: {
    top: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    alignItems: 'center',
    marginTop: RFValue(25),
  },

  text: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
  },

  inputWrapper: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '75%',
    height: RFValue(30),
    paddingHorizontal: RFValue(20),
    marginTop: RFValue(12),
    borderRadius: RFValue(25),
  },

  textInput: {
    maxWidth: '100%',
  },

  buttonContainer: {
    marginTop: RFValue(15),
  },
});

export default LogInScreen;
