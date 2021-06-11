
import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from "./styles";
//import {navbarContainer, elementStyle} from "../HomeScreen/index";
import {CaretDownOutlined} from '@ant-design/icons';


const DrivingScreen = () => {

  return (
    <View style={styles.screenContainer}>
        <SafeAreaView>
            <View style={{backgroundColor: '#ECF8ED',
                flex: 1,
            }}>

            </View>

            {/* Top Container */}
        {/*    <View style={styles.topContainer}>*/}
        {/*        /!* Logo *!/*/}
        {/*        <View style={styles.logoContainer}>*/}
        {/*            <Image source={require("../../assets/logo.png")}*/}
        {/*                   style={styles.logoStyle}/>*/}
        {/*        </View>*/}
        {/*        /!* Name *!/*/}
        {/*        <View style={styles.nameContainer}>*/}
        {/*            <Text style={styles.nameStyle}>Vehicle Renting</Text>*/}
        {/*        </View>*/}
        {/*        /!* Avatar *!/*/}
        {/*        <View style={styles.logoContainer}>*/}
        {/*            <Image source={require("../../assets/avatar.png")}*/}
        {/*                style={styles.logoStyle}/>*/}
        {/*        </View>*/}
        {/*    </View>*/}

        {/*<View style={styles.Middle}>*/}

        {/*</View>*/}
        {/*<View style={styles.Rq}>*/}

        {/*</View>*/}

        {/*/!* Navigation bar *!/*/}
        {/*  <View style={styles.navbarContainer}>*/}
        {/*      <TouchableOpacity>*/}
        {/*          <Image source={require("../../assets/NavBar/Home.png")}*/}
        {/*                 style={styles.elementStyle}/>*/}
        {/*      </TouchableOpacity>*/}
        {/*      <TouchableOpacity>*/}
        {/*          <Image source={require("../../assets/NavBar/friends.png")}*/}
        {/*                 style={styles.elementStyle}/>*/}
        {/*      </TouchableOpacity>*/}
        {/*      <TouchableOpacity>*/}
        {/*          <Image source={require("../../assets/NavBar/history.png")}*/}
        {/*                 style={styles.elementStyle}/>*/}
        {/*      </TouchableOpacity>*/}
        {/*  </View>*/}
        </SafeAreaView>
    </View>

  );
};

export default DrivingScreen;
