import React from 'react';
import {Image} from 'react-native';
import {View, StyleSheet, TextInput} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/search.png')}
        style={styles.searchStyle}
      />
      <TextInput
        placeholder="Search (Name, Phone Number, .."
        placeholderTextColor=""
        style={styles.inputStyle}
      />
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#81C187',
    borderRadius: 30,
    marginHorizontal: 30,
    marginVertical: 20,
  },
  searchStyle: {
    flex: 1,
    marginLeft: 20,
    marginVertical: 10,
    marginRight: 10,
  },
  inputStyle: {
    flex: 5,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
