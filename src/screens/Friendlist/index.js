
import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {CaretDownOutlined} from '@ant-design/icons';
import TopBar from "../../components/topBar";
import NavBar from "../../components/navigationBar";
import SearchBar from "../../components/SearchBar";


const FriendList = () => {

  return (
    <View style={styles.screenContainer}>
        <SafeAreaView>
            <TopBar text={'Friendlist'}/>
            <View style={styles.contentContainer}>

            </View>
            <NavBar />
        </SafeAreaView>
    </View>

  );
};

export default FriendList;
