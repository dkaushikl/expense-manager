import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-root-toast';
import { connect } from 'react-redux';
import { AddTodo, DeleteTodo } from './src/actions/todos';
import TodoAction from './src/components/Todo/TodoAction';
import TodoList from './src/components/Todo/TodoList';
import ToDoDetail from './src/components/Todo/TodoDetail';
import Register from './src/components/Auth/Register';
// import ScrollDemo from './src/components/Scroll/ScrollDemo';
// import HorizontalScroll from './src/components/Scroll/HorizontalScroll';
import ViewPagerExample from './src/components/Scroll/ViewPagerExample';
import BasicList from './src/components/List/BasicList';

const App = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(false);

  deleteTodo = (e) => {
    props.deleteTodo(e);
  }

  addToDo = (name) => {
    if (name.trim() === "") {
      Toast.show('Name is required bro...   :)', { duration: 1000, position: Toast.positions.TOP, animation: true });
      return;
    }

    props.addToDo(name);
  }

  detailTodo = (todo) => {
    setName(todo.name);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <BasicList />
      {/* <ViewPagerExample /> */}
      {/* <HorizontalScroll /> */}
      {/* <Register /> */}
      {/* <TodoAction addToDo={(name) => this.addToDo(name)} />
        <View>
          {props.todoList && props.todoList.length > 0 ?
            <TodoList todoList={props.todoList} deleteTodo={(e) => this.deleteTodo(e)} detailTodo={(e) => this.detailTodo(e)} />
            : null
          }
        </View>
        <ToDoDetail modalVisible={modalVisible} name={name} setModalVisible={(e) => setModalVisible(e)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  todoList: state.todo.todoList
});

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(DeleteTodo(id)),
    addToDo: name => dispatch(AddTodo(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);