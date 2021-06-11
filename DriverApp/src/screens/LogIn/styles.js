import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    overlay:{
        backgroundColor: '#97CD9C',
        borderRadius: 30
    },
    drivingImage: {
    },

    logoStyle:{
        alignSelf: 'center',
        width: 200,
        height: 200
    },

    logInContainer: {
        borderRadius: 30,
        borderWidth: 0.01,
        borderColor: 'grey',
        //shadowColor: 'black',
        //shadowOffset: { width: 2, height: 2},
        //shadowOpacity: 1,
        //shadowRadius: 5,
        elevation: 4,
        marginTop: 25,
        height: '65%',
        width: 310,
    },

    //Text
    textContainer: {
        marginHorizontal: 50
    },
    textStyle: {
        paddingVertical: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#49C9F5',
        fontWeight: 'bold',
        fontSize: 30
    },
    inputContainer:{
        marginHorizontal: 30,
        marginVertical: 10,
        borderBottomWidth: 0.2,
        borderBottomColor: '#BABAC3',
        padding: 1
    },
    inputStyle: {
        color: '#2B2B2F',
        fontSize: 18,
    },
    buttonStyle: {
        backgroundColor: '#49C9F5',
        borderRadius: 30,
        width: '50%',
        alignItems: 'center',
        alignSelf:'center',
        marginTop: 20,
        marginBottom: 10,
        padding: 10
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    FbGgContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    FbGgStyle: {
        height: 40,
        width: 40,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 20
    },
});

export default styles;
