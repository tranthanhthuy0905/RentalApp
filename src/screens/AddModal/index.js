
import React, {useState, Component} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import styles from './styles';
//import NavBar from '../../components/navigationBar';
import {View, Text, Image, Alert, TouchableOpacity, TextInput, StyleSheet, Dimensions} from 'react-native';
import flatListData, { flat } from '../../data/flatListData';

var screen = Dimensions.get('window');

const styles=StyleSheet.create({

    itemName:{
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      margin: 5
    },
    infoInput: {
      borderWidth: 0.5,
      borderRadius: 30,
      padding: 20,
      margin: 10,
      fontSize: 20,
    },

})
export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newVehicleName: '',
        newCostRange: '',
    };
  }
  showModal = () => {
    this.refs.myModal.open(); 
  }
  generateKey = (numberOfCharacters) => {
    return require('random-string')({length: numberOfCharacters});
  }
  render () {
    return (
      <Modal 
        ref = {"myModal"}
        style={{
          backgroundColor: '#97CD9C',
          justifyContent: 'center',
          borderRadius: 30,
          shadowRadius: 30,
          width: screen.width - 80,
          height: screen.height - 100
        }}
        position= 'center'
        backdrop = {true}
        onClosed = {() => {
          alert("Congratulations! Your vehicle is added.");
        }}
      >
        <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
              margin: 20,
            }}>
            ADD NEW VEHICLE
          </Text>
          <View>
            <Text style={styles.itemName}>Vehicle Brand</Text>

            <TextInput
              style={styles.infoInput}
              placeholder="e.g: Honda Vision 2019"
              onChangeText={(text) => this.setState({newVehicleName: text})}
              value={this.state.newVehicleName}
            />
          </View>
          <View>
            <Text style={styles.itemName}>Cost Range</Text>

            <TextInput
                keyboardType={'numeric'}
              style={styles.infoInput}
              placeholder="e.g: 100.000VND"
              onChangeText={(text) => this.setState({newCostRange: text})}
              value={this.state.newCostRange}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{margin: 20}}> Input Image </Text>

            <TouchableOpacity
              onPress={() => {
                if (this.state.newVehicleName.length==0 || 
                  this.state.newCostRange.length==0) {
                    alert("You have not entered the vehicle information.")
                    return;
                }
                const newKey = this.generateKey(24);
                const newVehicle = {
                  key: newKey,
                  VehicleName: this.state.newVehicleName,
                  CostRange: this.state.newCostRange,
                };
                flatListData.push(newVehicle);
                this.flatListData.parentFlatList.refreshFlatList(newKey);
                this.refs.myModal.close();
              }}>

              <Image
                source={require('../../assets/Confirm.png')}
                style={{
                  borderRadius: 30,
                  height: 50,
                  width: 50,
                  alignSelf: 'flex-end',
                }}
              />
            </TouchableOpacity>
          </View>
      </Modal>
    );
  }
}
