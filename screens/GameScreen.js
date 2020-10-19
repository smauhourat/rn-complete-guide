import React, { useState, useRef, useEffect } from 'react'
import { Text, StyleSheet, View, Button, Alert } from 'react-native'
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndm = Math.random() * (max - min) + min;
    if (rndm === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return parseInt(rndm);
    }
    //return 10;
} 

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 99, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(rounds);
        }
    }, [currentGuess, props]);

    const nextGuessHandler = (direction) => {
        console.log(direction);
        if (
            (direction === 'lower' && currentGuess < props.userChoice) || 
            (direction === 'greater' && currentGuess > props.userChoice)
        ) {
            Alert.alert("Don\´t lie", 'You know that is wrong.....');
            console.log("Don\´t lie. You know that is wrong.....");
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    }
        
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess  </Text>
            <NumberContainer value={currentGuess}/>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => {nextGuessHandler.bind(this, 'lower');}}/>
                <Button title="GREATER" onPress={() => {nextGuessHandler.bind(this, 'greater');}}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen;