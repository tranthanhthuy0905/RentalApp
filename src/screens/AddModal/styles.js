import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  addVehicleContainer: {
    flex: 1,
    backgroundColor: '#97CD9C',
    justifyContent: 'center',
    alignItems: 'center',
  },

  MiddleContainer: {
    flex: 5,
  },
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
  barLocation:{
    alignSelf: 'flex-end',
  },

});

export default styles;
