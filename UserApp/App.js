import React from 'react';
import {View, Text} from 'react-native';

import SplashScreen from './src/screens/SplashScreen';
import LogInScreen from './src/screens/LogInScreen';
import OTPInputScreen from './src/screens/OTPInputScreen';
import HomeScreen from './src/screens/HomeScreen';
import LocationsInputScreen from './src/screens/LocationsInputScreen';
import TripDetailScreen from './src/screens/TripDetailScreen';
import WaitingDriverScreen from './src/screens/WaitingDriverScreen';

const App: () => Node = () => {
  return (
    <View>
      {/* <SplashScreen /> */}
      <LogInScreen />
      <OTPInputScreen />
      <HomeScreen />
      <LocationsInputScreen />
      <TripDetailScreen />
      <WaitingDriverScreen />
    </View>
  );
};

export default App;
