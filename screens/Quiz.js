import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Quiz = ({ navigation }) => {
    const handleResult = () => {
        navigation.navigate('Result');
    };

    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <Text style={styles.question}>This is the question</Text>

                <TouchableOpacity style={styles.option}>
                    <Text>Option-1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text>Option-2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text>Option-3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text>Option-4</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleResult} style={styles.button}>
                    <Text style={styles.text}>END</Text>
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
    questionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    question: {
        fontSize: 20,
        marginBottom: 20,
    },
    option: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginVertical: 5,
        width: 200,
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'purple',
        padding: 10,
        marginHorizontal: 10,
        width: 100,
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Quiz;
