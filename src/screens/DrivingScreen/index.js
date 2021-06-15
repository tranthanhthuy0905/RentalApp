import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import styles from './styles';

import {CaretDownOutlined} from '@ant-design/icons';
import NavBar from '../../components/navigationBar';
import TopBar from '../../components/topBar';

const DrivingScreen = () => {
  return (
    <View style={styles.DrivingContainer}>
      <SafeAreaView>
        {/* Top Container */}
        <TopBar text={'Driving Service'} flex={2} />

        {/* Middle Container */}
        <View style={styles.MiddleContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/map.png')}
              style={styles.MapStyle}
            />
          </TouchableOpacity>
        </View>

        {/* Bot Container */}
        {/*<View style={styles.navbarContainer}>*/}
        {/*  <TouchableOpacity>*/}
        {/*    <Image*/}
        {/*      source={require('../../assets/NavBar/Home.png')}*/}
        {/*      style={styles.elementStyle}*/}
        {/*    />*/}
        {/*  </TouchableOpacity>*/}
        {/*  <TouchableOpacity>*/}
        {/*    <Image*/}
        {/*      source={require('../../assets/NavBar/friends.png')}*/}
        {/*      style={styles.elementStyle}*/}
        {/*    />*/}
        {/*  </TouchableOpacity>*/}
        {/*  <TouchableOpacity>*/}
        {/*    <Image*/}
        {/*      source={require('../../assets/NavBar/history.png')}*/}
        {/*      style={styles.elementStyle}*/}
        {/*    />*/}
        {/*  </TouchableOpacity>*/}
        {/*</View>*/}
        <NavBar/>
      </SafeAreaView>
    </View>
  );
};

export default DrivingScreen;
