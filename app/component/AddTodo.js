import React, {component, PropType} from "react";

export class AddTodo extends React.Component {
    render() {
        return <div>
            <input type="text" ref="addTask"/>
            <button type="button">添加</button>
        </div>
    }
}