import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import ButtonNavigateUp from '../components/ButtonNavigateUp';

const OTPInputScreen = props => {
  let textInput = useRef(null);
  const [internalVal, setInternalVal] = useState('');

  useEffect(() => {
    textInput.focus();
  }, []);

  const onChangeText = val => {
    setInternalVal(val);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ButtonNavigateUp />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.avoidingViewContainer}>
        <Text style={styles.textTitle}>
          Please enter the OTP code sent to your phone
        </Text>
        <View>
          <TextInput
            ref={input => (textInput = input)}
            onChangeText={onChangeText}
            style={{width: 0, height: 0}}
            maxLength={6}
            returnKeyType={'done'}
            keyboardType={'numeric'}
          />
          <View style={styles.inputContainer}>
            {Array(6)
              .fill()
              .map((data, index) => (
                <View
                  key={index}
                  style={[
                    styles.cellView,
                    // eslint-disable-next-line react-native/no-inline-styles
                    {
                      borderBottomColor:
                        index === internalVal.length ? '#FB6C6A' : '#234DB7',
                    },
                  ]}>
                  <Text
                    style={styles.cellText}
                    onPress={() => textInput.focus()}>
                    {internalVal && internalVal.length > 0
                      ? internalVal[index]
                      : ''}
                  </Text>
                </View>
              ))}
          </View>
        </View>

        <View style={styles.bottomView}>
          <TouchableOpacity>
            <View style={styles.btnChangeNumber}>
              <Text style={styles.textChange}>Change Number</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.btnResend}>
              <Text style={styles.textResend}>Resend OTP (24)</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E8EAED',
  },

  avoidingViewContainer: {
    marginTop: RFValue(40),
    alignItems: 'center',
  },

  textTitle: {
    alignItems: 'center',
    fontSize: RFValue(14),
    fontWeight: 'bold',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cellView: {
    paddingVertical: RFValue(11),
    width: RFValue(40),
    margin: RFValue(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: RFValue(1.5),
  },

  cellText: {
    textAlign: 'center',
    fontSize: 16,
  },

  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: RFValue(15),
    marginBottom: RFValue(50),
    alignItems: 'center',
    paddingHorizontal: RFValue(25),
  },

  btnChangeNumber: {
    width: RFValue(150),
    height: RFValue(50),
    borderRadius: RFValue(10),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  textChange: {
    color: '#234DB7',
    alignItems: 'center',
  },

  btnResend: {
    width: RFValue(150),
    height: RFValue(50),
    borderRadius: RFValue(10),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default OTPInputScreen;
