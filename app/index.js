import React, {component, PropType} from "react";
import ReactDOM from "react-dom";
import {AddTodo} from "./component/AddTodo";

export class App extends React.Component {
    render() {
        return <div>
            <AddTodo/>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));