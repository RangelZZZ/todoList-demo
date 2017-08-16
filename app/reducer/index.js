export default function reducer(state = {todolist: []}, action) {
    console.log("into reducer");
    switch (action.type) {
        case "ADD": {
            state.todolist.push({value: action.text, completed: false});
            console.log(state.todolist);
            return state;
        }

        default:
            return state;
    }
}