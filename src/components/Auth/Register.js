import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, StyleSheet, Keyboard, Button, Alert } from 'react-native'

const styles = StyleSheet.create({
    text: {
        height: 40,
        margin: 10,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    textArea: {
        height: 100
    },
    buttonContainer: {
        backgroundColor: 'green',
        margin: 20,
    }
});

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [salary, setSalary] = useState('');
    const [address, setAddress] = useState('');

    return (
        <View>
            <Text style={{ marginLeft: 10, marginTop: 20 }}>Enter firstname</Text>
            <TextInput style={styles.text} keyboardType="default" placeholder='Enter your first name...' placeholderTextColor='gray' value={firstName} onChangeText={(e) => setFirstName(e)} autoFocus={true} />
            {/* <Text style={{ marginLeft: 10 }}>Enter lastname</Text>
            <TextInput style={styles.text} keyboardType="default" placeholder='Enter your last name...' placeholderTextColor='gray' value={lastName} onChangeText={(e) => setLastName(e)} /> */}
            <Text style={{ marginLeft: 10 }}>Enter email</Text>
            <TextInput style={styles.text} keyboardType="email-address" placeholder='Enter your email...' placeholderTextColor='gray' value={email} onChangeText={(e) => setEmail(e)} />
            <Text style={{ marginLeft: 10 }}>Enter password</Text>
            <TextInput style={styles.text} keyboardType="default" placeholder='Enter your password...' placeholderTextColor='gray' value={password} onChangeText={(e) => setPassword(e)} secureTextEntry={true} />
            <Text style={{ marginLeft: 10 }}>Enter phone number</Text>
            <TextInput style={styles.text} keyboardType="numeric" placeholder='Enter your phone number...' placeholderTextColor='gray' value={phoneNumber} onChangeText={(e) => setPhoneNumber(e)} />
            <Text style={{ marginLeft: 10 }}>Enter salary</Text>
            <TextInput style={styles.text} keyboardType="decimal-pad" placeholder='Enter your salary...' placeholderTextColor='gray' value={salary} onChangeText={(e) => setSalary(e)} />
            <Text style={{ marginLeft: 10 }}>Enter address</Text>
            <TextInput style={[styles.text, styles.textArea]} keyboardType="default" placeholder='Enter your address...' placeholderTextColor='gray' value={address}
                returnKeyType='done' onChangeText={(e) => setAddress(e)} multiline={true} onSubmitEditing={Keyboard.dismiss} />
            <View style={styles.buttonContainer}>
                <Button title="Register Here" color="black" onPress={() => { Alert.alert('thai bhai var lage bapanu nathi.'); }}></Button>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
