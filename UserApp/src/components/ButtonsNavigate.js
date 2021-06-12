import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const ButtonsNavigate = props => {
  const navigateScreens = () => {
    console.warn(props.text);
  };
  return (
    <TouchableOpacity onPress={() => navigateScreens()}>
      <View
        style={
          props.numsButton === 1
            ? styles.buttonWrapper
            : [styles.buttonWrapper, {width: RFValue(70), height: RFValue(50)}]
        }>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(15),
    marginVertical: RFValue(15),
    padding: RFValue(10),
    color: 'black',
  },
});

export default ButtonsNavigate;
