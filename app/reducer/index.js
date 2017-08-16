export default function reducer(state = {todoList: []}, action) {
    switch (action.type) {
        case "ADD": {
            return [...state, {value: action.text, completed: false}];
        }

        case "TOGGLE": {
            const todo = state.find(element => state.indexOf(element) === action.text);
            todo.completed = !todo.completed;
            return [...state];
        }

        case "DELETE": {
            state.splice(action.index, 1);

            return [...state];
        }

        default: {
            return [...state];
        }
    }
}