import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#97CD9C',
        flexDirection: "column",
        alignItems: 'center'
        /*justifyContent: "center"*/
    },
    logoSetting: {
      marginTop: 80,
      marginBottom: 10,
      alignSelf: 'center',
      fontSize: 50
    },
    basicSetting: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 100
    },
    accessAcc: {
        color: '#70C163',
        fontSize: 25,
        fontWeight: 'bold',
    },
    bikeImage: {
        //flex: 1,
        width: 300,
        height: 300,
        resizeMode: 'cover',
    },
    boxContainer: {
      backgroundColor: 'white',
      borderRadius: 25,
      alignItems: 'center',
      padding: 10,
      alignContent: 'center',
      marginVertical: 5,
      marginHorizontal: 15
    },
    imageContainer: {
        flex: 1,
        backgroundColor: '#97CD9C',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain'
    }
});

export default styles;
