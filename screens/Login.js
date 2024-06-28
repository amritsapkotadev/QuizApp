import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={styles.wholepage}>
      <Text style={styles.headerText}>Sign in to Your Account</Text>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputtext} placeholder="Enter your username:" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputtext} secureTextEntry={true} placeholder="Enter your password:" />
        </View><View style={styles.actionContainer}> <TouchableOpacity> <Text> Signin </Text></TouchableOpacity></View>
        <View style={styles.actionContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton}><Text>Login with Google</Text></TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}><Text>Login with Facebook</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wholepage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
  loginContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputtext: {
    height: 50,
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    fontSize: 18,
    borderRadius: 5,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  signupButtonText: {
    color: 'black',
    textAlign: 'center',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: 'lightgrey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default Login;
