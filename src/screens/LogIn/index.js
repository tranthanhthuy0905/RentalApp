import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import styles from './styles';

const LogIn = props => {
  // Text input
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const userNameInput = enteredUsername => {
    setUsername(enteredUsername);
  };
  const passwordInput = enteredPassword => {
    setPassword(enteredPassword);
  };

  // List input
  const [usernameLists, setUsernameLists] = useState([]);

  const addUsername = () => {
    setUsernameLists(currentUsername => [...currentUsername, username]);
  };

  //Checkbox
  //const [toggleCheckBox, setToggleCheckBox] = useState(false)

  //Sign Up Press
  const buttonPress = () => {
    alert('Welcome back to Bice!');
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Image at the top */}
        {/*<View style={styles.overlay}>
              <Image source={require("../../assets/SignUp/driving.png")}
                     style={styles.drivingImage}/>
          </View>*/}
        {/* Navigation ComeBack Icon */}

        {/* Logo*/}
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logoStyle}
        />

        {/* Log In content*/}
        <View style={styles.logInContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Log In</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Username"
              onChangeText={userNameInput}
              value={username}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              secureTextEntry={true}
              style={styles.inputStyle}
              placeholder="Password"
              placeholderTextColor="#BABAC3"
              onChangeText={passwordInput}
              value={password}
            />
          </View>
          {/*<View style={styles.inputContainer}>*/}
          {/*    <TextInput secureTextEntry={true}*/}
          {/*        style={styles.inputStyle}*/}
          {/*        placeholder="Confirm Password"*/}
          {/*        onChangeText={confirmedPwInput}*/}
          {/*        value={confirmedPw}/>*/}
          {/*</View>*/}
          {/*<View style={styles.inputContainer}>*/}
          {/*    <TextInput style={styles.inputStyle}*/}
          {/*               placeholder="Phone Number"*/}
          {/*               onChangeText={phoneNumberInput}*/}
          {/*               value={phoneNumber}/>*/}
          {/*</View>*/}

          {/* Conditions Checking */}

          {/* Sign Up/Log In Button*/}
          <TouchableOpacity onPress={buttonPress} underlayColor="#FFFFFF">
            <View style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Log In</Text>
            </View>
          </TouchableOpacity>

          {/*Facebook, Google SignUp*/}
          <View style={{alignSelf: 'center', paddingVertical: 2}}>
            <Text style={{color: '#BABAC3', fontSize: 18, margin: 3}}>OR</Text>
          </View>
          <View style={styles.FbGgContainer}>
            <View>
              <Image
                source={require('../../assets/SignUp/facebook.png')}
                style={styles.FbGgStyle}
              />
            </View>
            <View>
              <Image
                source={require('../../assets/SignUp/google.png')}
                style={styles.FbGgStyle}
              />
            </View>
            <View>
              <Image
                source={require('../../assets/LogIn/phoneNumber.png')}
                style={styles.FbGgStyle}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LogIn;
