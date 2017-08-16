export const toggleTodo = index => {
    return {
        type: "TOGGLE",
        text:index
    }
};