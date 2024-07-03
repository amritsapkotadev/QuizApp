import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text, SocialIcon } from 'react-native-elements';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Implement your signup logic here
    console.log('Signing up with:', email, password);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Input
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry={true}
      />
      <Button
        title="Sign Up"
        onPress={handleSignUp}
        containerStyle={styles.buttonContainer}
      />
      <Text style={styles.orText}>Or Sign Up Using</Text>
      <View style={styles.socialButtonsContainer}>
        <SocialIcon type="facebook" onPress={() => console.log('Facebook signup')} />
        <SocialIcon type="google" onPress={() => console.log('Google signup')} />
      </View>
      <Text style={styles.signInText}>Already have an account? Sign In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  orText: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signInText: {
    marginTop: 20,
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignUpPage;
