import React from "react";
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const TodoList = (props) => {
    return (
        <View>
            <View style={styles.containerInner}>
                {props.todoList.map((todo) => {
                    return (
                        <View style={styles.todoView} key={todo.id}>
                            <View style={{ width: '60%', flexDirection: 'row', padding: 5 }}>
                                <Image style={styles.image} source={{ uri: 'https://mpng.pngfly.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg' }} />
                                <Text style={styles.text}>{todo.name}</Text>
                            </View>
                            {/* <View style={{ width: '40%', padding: 5 }}>
                                <Button style={styles.button} title="Delete" onPress={() => { props.deleteTodo(todo.id) }}></Button>
                                <Button style={styles.button} title="Detail" onPress={() => { props.detailTodo(todo) }}></Button>
                            </View> */}
                            <View style={{ width: '40%', flexDirection: 'row', padding: 5 }}>
                                <TouchableOpacity onPress={() => { props.deleteTodo(todo.id) }}>
                                    <View style={{ width: '100%', backgroundColor: 'red', alignItems: 'center', padding: 10, marginTop: 5 }}>
                                        <Text style={{ color: 'white' }}>Delete</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { props.detailTodo(todo) }}>
                                    <View style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', padding: 10, marginTop: 5 }}>
                                        <Text style={{ color: 'white' }}>Detail</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    todoView: {
        flexDirection: "row",
        backgroundColor: 'white',
        height: 65,
        borderWidth: 1,
        borderBottomColor: '#000',
    },
    containerInner: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
        margin: 20,
    },
    image: {
        width: 50,
        height: 50,
    },
    text: {
        color: 'black',
        fontSize: 15,
        alignSelf: "center",
        marginLeft: 20
    },
});

export default TodoList;