import {TodoList} from "../component/TodoList";
import {connect} from "react-redux";
import {toggleTodo} from  "../action/todo-list";

const mapStateToProps = state => {
    return {
        todoList: state
    };
};

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

export default connect(mapStateToProps, mapDisPathToProps)(TodoList);

