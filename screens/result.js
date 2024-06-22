import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Result = () => {
    return ( 
        <View style={styles.container}>
            <Text>Result</Text>

            <View style={styles.bannerContainer}>
                <Image source={require('../image/quiz.png')} style={styles.banner} />
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => console.log('Home button pressed')}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerContainer: {
        marginTop: 20,
    },
    banner: {
        
        width: 200,
        height: 200,
    },
    buttons: {
        marginTop: 20,
        backgroundColor: 'lightblue', // Example background color
        padding: 10,
        borderRadius: 5,
    },
});

export default Result;
