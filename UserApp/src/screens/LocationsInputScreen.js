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

const LocationsInputScreen = props => {
  const tripShow = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ButtonNavigateUp />
      <View style={styles.topView}>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder={'Enter pick up location'}
              style={styles.inputBox}
            />
            <TouchableOpacity>
              <FontAwesome5 name={'exchange-alt'} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder={'Enter destination location'}
              style={styles.inputBox}
            />
            <TouchableOpacity>
              <FontAwesome5 name={'plus'} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.mapsContainer}>
        <Text>Here is the google maps</Text>
      </View>
      <TouchableOpacity style={styles.tripContainer} onPress={() => tripShow()}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="bus" />
          <FontAwesome5 name="motorcycle" />
        </View>
        <View style={styles.textContainer}>
          <Text>Bice Transit</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text>12.000d</Text>
          <Text>10 mins</Text>
        </View>
      </TouchableOpacity>
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
    flexDirection: 'row',
    marginLeft: RFValue(40),
    paddingHorizontal: RFValue(15),
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(5),
    marginTop: RFValue(5),
  },

  inputBox: {
    width: '90%',
    alignItems: 'center',
    height: Platform.OS === 'android' ? RFValue(40) : RFValue(30),
    borderRadius: RFValue(10),
    backgroundColor: 'white',
    paddingHorizontal: RFValue(15),
    fontSize: RFValue(14),
  },
  icon: {
    transform: [{rotateZ: '90deg'}],
    fontSize: RFValue(16),
  },

  mapsContainer: {
    flex: 6,
    backgroundColor: 'white',
    marginTop: RFValue(15),
    alignItems: 'center',
    justifyContent: 'center',
  },

  tripContainer: {
    flex: 1,
    backgroundColor: '#E8EA',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  detailContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default LocationsInputScreen;
