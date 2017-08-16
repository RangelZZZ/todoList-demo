export const toggleTodo = index => {
    return {
        type: "TOGGLE",
        text: index
    }
};

export const deleteTodo = index => {
    return {
        type: "DELETE",
        text: index
    }
};