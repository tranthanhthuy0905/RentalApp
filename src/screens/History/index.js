
import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {CaretDownOutlined} from '@ant-design/icons';
import TopBar from "../../components/topBar";
import NavBar from "../../components/navigationBar";


const History = () => {

  return (
    <View style={styles.screenContainer}>
        <SafeAreaView>
            <TopBar text={'History'}/>


            <NavBar/>
        </SafeAreaView>
    </View>

  );
};

export default History;
