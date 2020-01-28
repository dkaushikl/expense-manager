import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../constants"

export const AddTodo = (name) => {
    return { type: ADD_TODO, payload: name }
}

export const UpdateTodo = (todo) => {
    return { type: UPDATE_TODO, payload: todo }
}

export const DeleteTodo = (id) => {
    return { type: DELETE_TODO, payload: id }
}