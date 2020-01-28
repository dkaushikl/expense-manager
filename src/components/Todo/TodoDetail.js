import React from "react";
import { Alert, Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red',
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted'
    }
})

const ToDoDetail = props => {
    return (
        <View style={{ marginTop: 22 }}>
            <Modal animationType="slide" transparent={false} visible={props.modalVisible} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>
                <View style={{ marginTop: 22 }}>
                    <View>
                        <Text style={styles.text}>{props.name}</Text>
                        <TouchableHighlight onPress={() => { props.setModalVisible(!props.modalVisible); }} style={{ marginTop: 22 }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ToDoDetail;