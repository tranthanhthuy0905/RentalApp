/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StatusBar} from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUp from './src/screens/SignUp';
import LogIn from './src/screens/LogIn';
//import Navigator from './routers/WelcomeStack';
import HomeScreen from './src/screens/HomeScreen';
import addVehicle from './src/screens/addVehicle';
import RentingScreen from './src/screens/RentingScreen';
import DrivingScreen from './src/screens/DrivingScreen';


const App: () => Node = () => {
  return (
    <StatusBar barStyle="dark-content"/>,
      //<WelcomeScreen/>
      //<SignUp/>
      //<LogIn/>
      //<Navigator/>
      //<HomeScreen/>
      //<addVehicle/>
      //<RentingScreen/>
      <DrivingScreen/>

  );
};

export default App;
