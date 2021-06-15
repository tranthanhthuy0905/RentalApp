/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUp from './src/screens/SignUp';
import LogIn from './src/screens/LogIn';
//import Navigator from './routers/WelcomeStack';
import HomeScreen from './src/screens/HomeScreen';
import AddVehicle from './src/screens/AddVehicle';
import RentingScreen from './src/screens/RentingScreen';
import DrivingScreen from './src/screens/DrivingScreen';
import AddRent from './src/components/Navigation/AddRent';
import FriendList from './src/screens/Friendlist';
import BasicFlatList from './src/components/basicFlatFlist';

const App: () => Node = () => {
  return (
    (<StatusBar barStyle="dark-content" />),
    (
      //<WelcomeScreen/>
      //<SignUp/>
      //<LogIn/>
      //   <Navigator/>
      // <HomeScreen/>
      //<AddVehicle />
        <BasicFlatList/>
    )
    //   <AddRent/>
    //   <FriendList/>
    //
    //<RentingScreen/>
    //<DrivingScreen />
  );
};

export default App;
