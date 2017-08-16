import {TodoList} from "../component/TodoList";
import {connect} from "react-redux";
import {deleteTodo, toggleTodo} from  "../action/todo-list";

const mapDisPathToProps = (disPatch) => {
    return {
        onDelete: (index) => {
            disPatch(deleteTodo(index));
        },
        onToggle: (index) => {
            disPatch(toggleTodo(index));
        }
    }
};

const mapStateToProps = (state) => {
    return {
        todoList: getFilteredTodos(state.todos, state.filterTodos.filterName)
    };
};

function getFilteredTodos(todoList, filterName) {
    if (filterName === "ALL") {
        return todoList;
    }
    if (filterName === "ACTIVE") {
        return todoList.filter(todo => !todo.completed);
    }

    if (filterName === "COMPLETED") {
        return todoList.filter(todo => todo.completed);
    }

    return todoList;
}

export default connect(mapStateToProps, mapDisPathToProps)(TodoList);

