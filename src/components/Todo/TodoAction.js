import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
    },
    todoNameInput: {
        height: 40,
        borderColor: 'white',
        color: 'white',
        borderWidth: 1,
        width: "100%",
        marginBottom: 15,
    },
    todoButton: {
        width: "100%"
    },
    welcomeText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 15
    }
});

const ToDoAction = props => {
    const [name, onChangeText] = useState('');

    const addToDo = () => {
        props.addToDo(name);
        onChangeText('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome Todo Apps.....</Text>
            <TextInput countryPlaceHolder="An Awesome Todo App" value={name} onChangeText={(val) => onChangeText(val)} style={styles.todoNameInput} />
            <Button title="Submit" style={styles.todoButton} onPress={addToDo}></Button>
        </View>
    )
}

export default ToDoAction;