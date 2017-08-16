import {TodoList} from "../component/TodoList";
import {connect} from "react-redux";

console.log("into mapStatetoProps");

const mapStateToProps = state => {
    console.log(state);
    return {
        todoList: state
    };
};

export default connect(mapStateToProps)(TodoList);

