
import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from "./styles";
import {CaretDownOutlined} from '@ant-design/icons';


const HomeScreen = () => {

  return (
    <View style={styles.screenContainer}>
        <SafeAreaView>

          <View style={styles.topContainer}>
              {/* Logo - Top Left */}
              <Image source={require("../../assets/logo.png")}
                    style={styles.logoStyle}/>

              {/* Account Setting - Top Right */}
              <TouchableOpacity>
                  <Image source={require("../../assets/avatar.png")}
                         style={styles.avatarStyle}/>
              </TouchableOpacity>
          </View>

          {/* Main Content Container */}
          <View style={styles.contentContainer}>
                {/* Navigating Scroll down - Center */}
                {/*<TouchableOpacity>*/}
                {/*    */}
                {/*    /!*<CaretDownOutlined style={styles.caretDownStyle}/>*!/*/}
                {/*</TouchableOpacity>*/}

                {/* "Earn money with Bice" */}
                <View style={styles.quoteContainer}>
                    <Text style={styles.quoteStyle}>Earn money with Bice</Text>
                </View>

                {/* Service Platforms */}
                <View style={styles.platformContainer}>
                    {/* Renting platform */}
                    <View style={styles.serviceContainer}>
                    <TouchableOpacity>
                        <Image source={require("../../assets/HomeScreen/renting.png")}/>
                        <Text style={styles.nameStyle}>Renting</Text>
                    </TouchableOpacity>
                    </View>

                    {/* Driving platform */}
                    <View style={styles.serviceContainer}>
                    <TouchableOpacity>
                        <Image source={require("../../assets/HomeScreen/driving.png")}/>
                        <Text style={styles.nameStyle}>Driving</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                {/* Ads */}
                <View style={styles.adsContainer}>
                    <TouchableOpacity>
                        <Image source={require("../../assets/HomeScreen/ads.png")}
                               style={styles.adsStyle}/>
                    </TouchableOpacity>
                </View>
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

export default HomeScreen;
