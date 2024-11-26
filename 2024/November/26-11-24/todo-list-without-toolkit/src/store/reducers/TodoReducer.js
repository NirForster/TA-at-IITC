// import { } from 

const initialState = {
    todos: [
        { id: 123456, text: "first todo", completed: false},
        { id: 547383, text: "second todo", completed: false}
    ],
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Date.now(), text: action.payload, completed: false}
                ]
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        default: 
            return state;
    }
}

export default todosReducer