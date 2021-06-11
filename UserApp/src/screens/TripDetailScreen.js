import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ButtonNavigateUp from '../components/ButtonNavigateUp';
import ButtonsNavigate from '../components/ButtonsNavigate';

const TripDetailScreen = props => {
  const tripShow = () => {};

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.routesContainer}>
        <ScrollView>
          <Text>Routes and Fare Information</Text>
        </ScrollView>
        <View style={styles.iconContainer1}>
          <ButtonNavigateUp />
          <ButtonsNavigate text="Bice Now" numsButton={1} />
        </View>
      </View>
      <View style={styles.mapsContainer}>
        <Text>Here is the route maps</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#E8EAED',
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

  routesContainer: {
    flex: 4,
  },

  mapsContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  iconContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(15),
  },
});

export default TripDetailScreen;
