import React, {Component, PropType} from "react";

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    delete(index) {
        this.props.onDelete(index);
    }

    toggle(index) {
        this.props.onToggle(index);
    }

    render() {
        const todos = this.props.todoList || [];
        const todoList = todos.map((element, index) => {
            return <div key={index}>
                <input type="checkbox" checked={element.completed ? "checked" : ""}
                       onChange={this.toggle.bind(this, index)}/>
                <span>{element.value}</span>
                <button type="button" onClick={this.delete.bind(this, index)}>删除</button>
            </div>
        });
        return <div>
            {todoList}
        </div>

    }
}

