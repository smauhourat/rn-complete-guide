import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const NumberContainer = (props) => {
    return (
        <View style={styles.number}>
            <Text>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    number : {
        padding: 10,
        margin: 10,
        shadowRadius: 6,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },

    }    
})

export default NumberContainer;