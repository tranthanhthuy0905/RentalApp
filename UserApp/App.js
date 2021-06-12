import React from 'react';
import {View, Text} from 'react-native';

import SplashScreen from './src/screens/SplashScreen';
import LogInScreen from './src/screens/LogInScreen';
import OTPInputScreen from './src/screens/OTPInputScreen';
import HomeScreen from './src/screens/HomeScreen';
import LocationsInputScreen from './src/screens/LocationsInputScreen';
import TripDetailScreen from './src/screens/TripDetailScreen';
import WaitingDriverScreen from './src/screens/WaitingDriverScreen';
import MessageWithDriverScreen from './src/screens/MessageWithDriverScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import RentalInputScreen from './src/screens/RentalInputScreen';
import RentalSearchResultsScreen from './src/screens/RentalSearchResultsScreen';
import VehicleDetailScreen from './src/screens/VehicleDetailScreen';
import LicenseUploadScreen from './src/screens/LicenseUploadScreen';

const App: () => Node = () => {
  return (
    <View>
      {/* <SplashScreen /> */}
      {/* <LogInScreen /> */}
      {/* <OTPInputScreen /> */}
      {/* <HomeScreen /> */}
      {/* <LocationsInputScreen /> */}
      {/* <TripDetailScreen /> */}
      {/* <WaitingDriverScreen /> */}
      {/* <MessageWithDriverScreen /> */}
      {/* <PaymentScreen /> */}
      {/* <RentalInputScreen /> */}
      {/* <RentalSearchResultsScreen /> */}
      {/* <VehicleDetailScreen /> */}
      <LicenseUploadScreen />
    </View>
  );
};

export default App;
