import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#B0EDB5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10,
    height: 100,
    alignItems: 'center',
  },
  avatarStyle: {
    borderRadius: 30,
    padding: 1,
    height: 60,
    width: 60,
  },
  logoStyle: {
    borderRadius: 30,
    padding: 1,
    height: 80,
    width: 90,
  },

  contentContainer: {
    flex: 8,
    backgroundColor: 'white',
    marginTop: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // caretDownStyle:{
  //
  // },
  quoteContainer: {
    //flex: 1,
  },
  quoteStyle: {
    color: '#62B46A',
    fontWeight: 'bold',
    fontSize: 20,
  },

  platformContainer: {
    //flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  serviceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
  },
  nameStyle: {
    color: '#62B46A',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  adsContainer: {
    margin: 2,
  },
  adsStyle: {},

  navbarContainer: {
    flex: 1,
    backgroundColor: '#ECF8ED',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
  },
  elementStyle: {},
});

export default styles;
