export const addTodoList = text => {
    console.log("into action");
    return {
        type: "ADD",
        text
    }
}