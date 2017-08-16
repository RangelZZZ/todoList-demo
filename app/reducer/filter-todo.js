export default function filterTodos(state = {filterName: "ALL"}, action) {
    console.log("into filterTodos");
    switch (action.type) {
        case "SET_FILTER": {
            state.filterName = action.filterName;
            return state;
        }

        default: {
            return state;
        }
    }
}