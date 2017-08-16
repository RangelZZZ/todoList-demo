export default function reducer(state = {todoList: []}, action) {
    switch (action.type) {
        case "ADD": {
            return [...state, {value: action.text, completed: false}];
        }

        default:
            return [...state];
    }
}