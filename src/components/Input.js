import React from 'react';
import { TextInput, StyleSheet }  from 'react-native';

const Input = ({ onChangeText, value }) => (
    <TextInput 
        style={style.input} 
        onChangeText ={onChangeText}
        value={value} />
);

const style = StyleSheet.create({
	input: {
        paddingLeft: 15,
        paddingBottom: 15
	}
})

export default Input;