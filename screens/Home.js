import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Title from '../components/title';

const Home = ({ navigation }) => {
  const handleStartQuiz = () => {
    navigation.navigate('Quiz'); 
  };

  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.contentContainer}>
        <View style={styles.bannerContainer}>
          <Image
            style={styles.banner}
            source={require('../image/quizman.jpg')}
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleStartQuiz}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 40, // Padding top for Title component
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  bannerContainer: {
    width: 400,
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  banner: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
    width: 200,
    alignItems: 'center',
    height:70,
  },
  buttonText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: '600',
  },
});

export default Home;
