import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Result = (navigaton) => {
    const handlehome = () => {
        navigaton.navigate('Home');
    };
    return ( 
        <View style={styles.container}>
            <Text>Result</Text>

            <View style={styles.bannerContainer}>
                <Image
                    style={styles.banner}
                    source={require('../image/Quiz.png')}
                />
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity onpress={handlehome}>
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
        backgroundColor: 'lightblue', 
        padding: 10,
        borderRadius: 5,
    },
});

export default Result;
