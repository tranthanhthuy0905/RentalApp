
import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from "./styles";
import {CaretDownOutlined} from '@ant-design/icons';


const RentingScreen = () => {

  return (
    <View style={styles.screenContainer}>
        <SafeAreaView>
        {/* Top Container */}
        <View style={styles.topContainer}>
            {/* Logo */}
            <View style={styles.logoContainer}>
                <Image source={require("../../assets/logo.png")}
                       style={styles.logoStyle}/>
            </View>
            {/* Name */}
            <View style={styles.nameContainer}>
                <Text style={styles.nameStyle}>Vehicle Renting</Text>
            </View>
            {/* Avatar */}
            <View style={styles.logoContainer}>
                <Image source={require("../../assets/avatar.png")}
                    style={styles.logoStyle}/>
            </View>
        </View>

        {/* Middle Container */}
        <View style={styles.middleContainer}>
            {/* Element */}
            <View style={styles.elementContainer}>
                {/* Edit container */}
                <View style={styles.editContainer}>
                    <View style={styles.notiContainer}>
                        <Text style={styles.notiStyle}>Newly update on dd/mm/yy</Text>
                    </View>
                    <View style={styles.editButtonContainer}>
                        <Image source={require("../../assets/edit.png")}
                               style={styles.buttonStyle}/>
                    </View>
                    <View style={styles.deleteButtonContainer}>
                        <Image source={require("../../assets/delete.png")}
                               style={styles.buttonStyle}/>
                    </View>
                </View>

                {/* Information container */}
                <View style={styles.informationContainer}>
                    <View style={styles.vehicleContainer}>
                        <Image source={require("../../assets/RentingScreen/motor.png")}
                               style={styles.motorStyle}/>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoStyle}>Information</Text>
                    </View>
                </View>

                {/* Rating container */}
                <View style={styles.ratingContainer}>
                    <Text>Here is money and rating</Text>
                </View>
            </View>
            <View style={styles.vehicle2}>
                <Text>Vehicle 2</Text>
            </View>
        </View>

        {/* Scroll Container */}
        <View style={styles.scrollContainer}>
        <Text>Scroll Icon</Text>
        </View>

        {/* Navigation bar */}
          <View style={styles.navbarContainer}>
              <TouchableOpacity>
                  <Image source={require("../../assets/NavBar/Home.png")}
                         style={styles.elementStyle}/>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Image source={require("../../assets/NavBar/friends.png")}
                         style={styles.elementStyle}/>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Image source={require("../../assets/NavBar/history.png")}
                         style={styles.elementStyle}/>
              </TouchableOpacity>
          </View>

        </SafeAreaView>
    </View>

  );
};

export default RentingScreen;
