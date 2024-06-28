import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const getQuiz = async () => {
        try {
            const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
            const response = await fetch(url);
            const data = await response.json();
            setQuestions(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getQuiz();
    }, []);

    const handleResult = () => {
        navigation.navigate('Result');
    };

    const handleNextQuestion = () => {
        // Move to the next question
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const renderQuestion = () => {
        if (!questions || questions.length === 0) {
            return <Text>Loading...</Text>;
        }

        const currentQuestion = questions[currentQuestionIndex];

        return (
            <View style={styles.questionContainer}>
                <Text style={styles.question}>{currentQuestion.question}</Text>

                {options.map((option, index) => (
                    <TouchableOpacity key={index} style={styles.option}>
                        <Text style={styles.optiontext}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {renderQuestion()}

            <View style={styles.buttonContainer}>
                {questions!==9 && <TouchableOpacity style={styles.button} onPress={handleNextQuestion} >
                    <Text style={styles.text}>Next</Text>
                </TouchableOpacity> }
            </View>
            <View style={styles.buttonContainer}>
                {questions===9 && <TouchableOpacity style={styles.button} onPress={handleNextQuestion} >
                    <Text style={styles.text}>Show Results</Text>
                </TouchableOpacity> }
                
                <TouchableOpacity style={styles.button} onPress={handleResult}>
                    <Text style={styles.text}>Submit</Text>
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
 

export default Quiz;