import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../constants';

const initialState = {
    todoList: [{
        id: 1,
        name: 'Testing Task'
    }, {
        id: 2,
        name: 'Testing Task'
    },
    {
        id: 3,
        name: 'Testing Task'
    },
    {
        id: 4,
        name: 'Testing Task'
    },
    {
        id: 5,
        name: 'Testing Task'
    }]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, {
                    id: Math.random(),
                    name: action.payload,
                }]
            };
        case UPDATE_TODO:
            return { ...state, todoList: this.state.todoList };
        case DELETE_TODO:
            let todoListItems = state.todoList;
            todoListItems = todoListItems.filter(x => x.id !== action.payload);
            return { ...state, todoList: todoListItems };
        default:
            return state;
    }
}

export default todoReducer;