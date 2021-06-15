import React, {Component, useState} from "react";
import {AppRegistry, FlatList, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import flatListData from '../../data/flatListData';
import NavBar from '../../components/navigationBar';
import AddModal from '../AddModal';

class FlastListItem extends Component {
    render() {
        return(
            <View style={{
                flex: 1,
                backgroundColor: 'white',
            }}>
                <Text style={styles.flatListItem}>{this.props.item.VehicleName}</Text>
                <Text style = {styles.flatListItem}>{this.props.item.CostRange}</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    flatListItem: {
        color: 'black',
        frontSize: 20,
        padding: 10,
    }
});
export default class RentingScreen extends Component {
    constructor (props) {
        super(props);
        this.state = ({
          activeRowKey = null,
        });
        this._onAddModal = this._onAddModal.bind(this);
    }
    refreshFlatList = (activeKey) => {
      this.setState((prevState) => {
        return {
          activeRowKey: activeKey
        };
      });
      // Auto scroll to the end of the List to see the updated vehicles
      this.refs.vehicleList.scrollToEnd();
    }
    _onAddModal() {
      this.refs.AddModal.showModal();
    }
    render() {
        return (
          <View style={styles.screenContainer}>
            <SafeAreaView>
                {/* Top Container */}
              <TopBar text={'Vehicle Renting'}
                      />
              {/* Middle Container*/}
              <View style={styles.contentContainer}>
                <FlatList
                  // Set name of list
                  ref = {"vehicleList"}

                  // List Data
                  data={flatListData}

                  // Single Item: item = object, index = id
                  renderItem={({item, index}) => {
                      return (
                          <FlastListItem item={item} index={index}>

                          </FlastListItem>
                      );
                  }}
                >
                </FlatList>
              </View>

              <AddModal ref={'addModal'} parentFlatList={this}>
      
              </AddModal>

              <TouchableOpacity style={styles.scrollUpStyle}
                onPress={this._onAddModal}>
                  <Text> Add Vehicle here! </Text>
              </TouchableOpacity>
                
              <NavBar/>
            </SafeAreaView>
          </View>
        );
    }

// const RentingScreen = ({router}) => {

//     // const data = [{
//     //     id: 0,
//     //     vehicle: '',
//     //     cost: 0,
//     // }]

    
//     const onAddModal = () =>{
//       this.refs.AddModal.showModal();
//     }

//   return (
//     <View style={styles.screenContainer}>
//       <SafeAreaView>
//         {/* Top Container */}
//         <TopBar text={'Vehicle Renting'}
//                 />
//         {/* Middle Container*/}
//         <View style={styles.contentContainer}>
//           <FlatList style={styles.vehicleContainer}>
//             <Text> The information of the Vehicles taken
//             from the user's input </Text>
//           </FlatList>
//           <AddModal ref={'addModal'} parentFlatList={this}>
 
//           </AddModal>
//           <TouchableOpacity style={styles.scrollUpStyle}>
//               <Text> Add Vehicle here! </Text>
//           </TouchableOpacity>
//         </View>
         
//         <NavBar/>
//       </SafeAreaView>
//     </View>
//   );
// };

// export default RentingScreen;
