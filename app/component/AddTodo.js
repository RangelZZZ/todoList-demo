import React, {component, PropType} from "react";

export class AddTodo extends React.Component {

    addTodo() {
        const text = this.textInput.value;
        this.props.addTodo(text);
    }

    render() {
        return <div>
            <input type="text" ref={(text) => this.textInput = text}/>
            <button type="button" onClick={this.addTodo.bind(this)}>添加</button>
        </div>
    }
}