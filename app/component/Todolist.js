import React, {Component, PropType} from "react";

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const todos = this.props.todoList || [];
        const todoList = todos.map((element, index) => {
            return <div key={index}>
                <input type="checkbox"/>
                <span>{element.value}</span>
                <button type="button">删除</button>
            </div>
        });
        return <div>
            {todoList}
        </div>

    }
}

