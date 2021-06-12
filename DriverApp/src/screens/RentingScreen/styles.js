import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
        backgroundColor: '#B0EDB5',
        alignItems: 'center',
        justifyContent:'center',
    },


        topContainer:{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: 20,

        },
                logoContainer: {
                    flex:1,
                    margin: 2,
                },
                    logoStyle: {
                        borderRadius: 30,
                        height: 80,
                        width: 90,
                    },
                nameContainer: {
                    flex:2,
                    margin: 2,
                },
                    nameStyle:{
                        flex:2,
                        color: '#468446',
                        fontSize: 20,
                        fontWeight: 'bold',
                    },
                // avatarStyle: {
                //     flex:1,
                // },



        middleContainer: {
            flex: 7,
            backgroundColor: '#ECF8ED',
        },
                elementContainer: {
                    flex: 1,
                    borderBottomWidth: 0.3,
                    borderBottomColor: 'grey',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                        editContainer: {
                            flex: 1,
                            flexDirection: 'row',
                            margin: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                                notiContainer: {
                                    flex: 6,
                                },
                                        notiStyle:{
                                            color: 'red',
                                            fontSize: 10,
                                            fontWeight: 'bold',
                                        },
                                editButtonContainer:{
                                    flex:1,
                                },
                                deleteButtonContainer: {
                                    flex:1,
                                },
                                        buttonStyle: {
                                            borderRadius: 30,
                                        },

                        informationContainer: {
                            flex: 4,
                            margin: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                                vehicleContainer:{
                                    flex: 2,

                                },
                                        motorStyle:{
                                            borderRadius: 30,
                                        },
                                infoContainer:{
                                    flex:4,
                                },
                                        infoStyle: {
                                            fontSize: 30,
                                            fontWeight: 'bold',
                                        },

                        ratingContainer:{
                            flex: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                vehicle2: {
                    flex: 1
                },

        scrollContainer: {
            flex: 1,
        },


        navbarContainer:{
            flex: 2,
            backgroundColor: '#ECF8ED',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 40
        },
                elementStyle: {

                },
});

export default styles;
