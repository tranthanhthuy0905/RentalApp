// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/



import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import RentingScreen from '../../screens/RentingScreen';
import AddVehicle from '../../screens/AddVehicle';

const Stack = createStackNavigator();

const AddRent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddVehicle">
        <Stack.Screen
          name="AddVehicle"
          component={AddVehicle}
          options={{
            title: 'Adding new Vehicles', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="RentingScreen"
          component={RentingScreen}
          options={{
            title: 'Vehicle Renting', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AddRent;
