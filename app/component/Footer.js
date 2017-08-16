import React, {Component, PropType} from "react";

export class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: this.props.todoList ||[]
        };
    }

    filter(filterName) {
        this.props.onFilter(filterName);
    }

    render() {
        console.log(this.state.todoList);
        const footer = ["ALL", "ACTIVE", "COMPLETED"].map((filterName, index) => {
            return <div key={index} style={{"display": "inline-block"}}>
                <a onClick={this.filter.bind(this, filterName)}>{filterName}&nbsp;&nbsp;</a>
            </div>
        });
        return <div>
            {footer}
        </div>
    }
}