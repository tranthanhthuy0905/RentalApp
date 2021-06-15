
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import NavBar from '../../components/navigationBar';

const AddVehicle = ({navigation}) => {
  //Text Input
  const [vehicleName, setVehicleName] = useState('');
  const [costRange, setCostRange] = useState('');

  // Date and Time input

  return (
    <View style={styles.addVehicleContainer}>
      <SafeAreaView>
        <View style={{flex: 9, marginTop: 100}}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
              margin: 20,
            }}>
            ADD NEW VEHICLE
          </Text>

          {/*<View style={styles.vehicleNameCon}>*/}
          <View>
            <Text style={styles.itemName}>Vehicle Brand</Text>

            <TextInput
              style={styles.infoInput}
              placeholder="e.g: Honda Vision 2019"
              onChangeText={vehicleName => setVehicleName(vehicleName)}
            />
          </View>

          {/*</View>*/}

          {/*<View style={styles.veNameContainer}>*/}
          <View>
            <Text style={styles.itemName}>Cost Range</Text>

            <TextInput
                keyboardType={'numeric'}
              style={styles.infoInput}
              placeholder="e.g: 100.000VND"
              onChangeText={costRange => setCostRange(costRange)}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{margin: 20}}> Input Image </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('RentingScreen')}>
              <Image
                source={require('../../assets/Confirm.png')}
                style={{
                  borderRadius: 30,
                  height: 50,
                  width: 50,
                  alignSelf: 'flex-end',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <NavBar />
      </SafeAreaView>
    </View>
  );
};

export default AddVehicle;
