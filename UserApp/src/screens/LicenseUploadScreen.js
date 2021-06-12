import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import ButtonsNavigate from '../components/ButtonsNavigate';
import Header from '../components/Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const LicenseUploadScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'License Register'} />
      <View
        style={{
          with: '100%',
          height: '7%',
          alignItems: 'center',
          marginVertical: RFValue(20),
        }}>
        <FontAwesome5 name={'id-badge'} style={{fontSize: RFValue(28)}} />
      </View>
      <View style={styles.inputBox}>
        <TextInput
          placeholder={'Enter Full Name'}
          style={styles.inputWrapper}
        />
        <TextInput placeholder={'Date of Birth'} style={styles.inputWrapper} />
        <TextInput
          placeholder={'ID Number or Passport'}
          style={styles.inputWrapper}
        />
        <TextInput
          placeholder={'Driver License Number'}
          style={styles.inputWrapper}
        />
        <TextInput placeholder={'Class Type'} style={styles.inputWrapper} />
        <TextInput placeholder={'Date Expired'} style={styles.inputWrapper} />
      </View>

      <View style={styles.uploadContainer}>
        <TouchableOpacity>
          <View style={styles.btnWrapper}>
            <Text>Upload ID or Passpord</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btnWrapper}>
            <Text>Driver License Upload</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ButtonsNavigate text={'Submit'} numsButton={1} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E8EAED',
  },

  inputBox: {
    width: '100%',
    height: '50%',
    marginHorizontal: RFValue(15),
    marginBottom: RFValue(10),
  },

  inputWrapper: {
    width: '90%',
    borderRadius: 25,
    height: RFValue(40),
    backgroundColor: 'white',
    marginVertical: RFValue(10),
    paddingHorizontal: RFValue(15),
  },

  uploadContainer: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnWrapper: {
    width: RFValue(180),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    marginBottom: RFValue(10),
  },
});

export default LicenseUploadScreen;
