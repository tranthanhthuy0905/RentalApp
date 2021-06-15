import React, {Component} from "react";
import {AppRegistry, FlatList, StyleSheet, Text, View} from "react-native";
import flatListData from '../data/flatListData';

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
export default class BasicFlatList extends Component {
    constructor (props) {
        super(props);
        this.
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: 20}}>
                <FlatList
                    // List Data
                    data={flatListData}
                    // Single Item: item = object, index = id
                    renderItem={({item, index}) => {
                        return (
                            <FlastListItem item={item} index={index}>

                            </FlastListItem>
                        );
                    }}>

                </FlatList>
            </View>
        );
    }
}   
