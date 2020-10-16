import React from 'react'
import { StyleSheet, TextInput  } from 'react-native'

// Not work Spread Operator in react with current versions
//https://github.com/realm/realm-js/issues/2844
//{...props}
// Las propiedades blurOnSubmit autoCapitalize='characters' autoCorrect={false} keyboardType='numeric'
// deberian venir desde el lugar donde se instancia el componente
const Input = (props) => {
    return (
            <TextInput blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='number-pad' maxLength={2} style={[styles.input, props.style]} />
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})
