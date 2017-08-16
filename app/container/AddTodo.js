import {connect} from "react-redux";
import {AddTodo} from "../component/AddTodo";
import {addTodoList} from "../action/add-todo";

const mapDispatchToprops = dispatch => {
    return {
        addTodo: text => {
            console.log("into mapDispatchTop");
            dispatch(addTodoList(text));
        }
    }
};

export default connect(() => {
    return {}
}, mapDispatchToprops)(AddTodo);

