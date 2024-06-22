import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Quiz = ({ navigation }) => {
    const [questions,setquestions]=useState([]);
    const getQuiz=async()=>{
         const url ='https://opentdb.com/api.php?amount=10';
         const resonse = await fetch(url);
         console.log(resonse);
    }
    useEffect(() => {
        getQuiz();
    }, []);
    const handleResult = () => {
        navigation.navigate('Result');
    };

    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <Text style={styles.question}>Q. This is the question?</Text>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optiontext}>Option-1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optiontext}>Option-2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optiontext}>Option-3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optiontext}>Option-4</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={handleResult} style={styles.button}>
                    <Text style={styles.text}>END</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    questionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 40,
    },
    question: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    option: {
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 15,
        marginHorizontal: 20,
        marginVertical: 10,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'purple',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    optiontext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});