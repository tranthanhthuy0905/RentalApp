import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import ButtonNavigateUp from '../components/ButtonNavigateUp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MessageWithDriverScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ButtonNavigateUp />
        <Text style={styles.driverName}>Nguyen Van Tai</Text>
      </View>
      <View style={styles.messageBox}>
        <Text>Here is the message box</Text>
      </View>
      <View style={styles.messageInputContainer}>
        <TextInput
          placeholder={'Enter the message here'}
          style={styles.textInput}
        />
        <TouchableOpacity>
          <FontAwesome5 name={'paper-plane'} style={styles.btnSend} />
        </TouchableOpacity>
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

  header: {
    width: '100%',
    height: '8%',
    backgroundColor: '#E8EA',
    flexDirection: 'row',
    alignItems: 'center',
  },

  driverName: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginLeft: RFValue(15),
  },

  messageBox: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  messageInputContainer: {
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(20),
  },

  textInput: {
    width: '85%',
    height: '50%',
    backgroundColor: 'white',
    paddingHorizontal: RFValue(20),
    borderRadius: RFValue(15),
  },

  btnSend: {
    fontSize: RFValue(20),
  },
});

export default MessageWithDriverScreen;
