import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  navigation, 
} from 'react-native';
 const navigatetosignup = () => {
    navigation.navigate('Signup');
  };
const Login = () => {
  const handleSignIn = () => {
    console.log('Signing in...');
  };

  return (
    <View style={styles.wholepage}>
      <Text style={styles.headerText}>Sign in to Your Account</Text>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputtext}
            placeholder="Enter your username:"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputtext}
            secureTextEntry={true}
            placeholder="Enter your password:"
          />
        </View>
        <View style={styles.forgotpassword}>
          <TouchableOpacity>
            <Text style={styles.forgotpasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signinButton} onPress={handleSignIn}>
          <Text style={styles.signinButtonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton1}>
            <Text style={styles.loginwithtext}>Login with Google</Text>
            <Image
              style={styles.banner}
              source={require('../image/Googlelogo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton2}>
            <Text style={styles.loginwithtext}>Login with Facebook</Text>
            <Image
              style={styles.banner}
              source={require('../image/facebooklogo.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.actionContainer}>
          <Text style={styles.noaccount}>Don't have an account?</Text>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupButtonText} onPress={navigatetosignup}> Signup </Text>
          </TouchableOpacity>
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
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  inputtext: {
    height: 50,
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    fontSize: 18,
    borderRadius: 5,
  },
  forgotpassword: {
    marginTop: 5,
    alignItems: 'flex-end',
  },
  forgotpasswordText: {
    color: 'blue',
  },
  signinButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  signinButtonText: {
    color: 'white',
    fontSize: 18,
  },
  socialLoginContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  socialButton1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
    marginBottom: 10,
  },
  socialButton2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  banner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'flex-end',
  },

  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  noaccount: {
    fontSize: 16,
    color: 'black',
  },
  signupButton: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  signupButtonText: {
    color: 'blue',
  },
  forgotpasswordText: {
    color: 'blue',
  },
});

export default Login;
