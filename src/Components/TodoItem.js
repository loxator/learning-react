import React, { Component } from 'react';
import './TodoItem.css'


class TodoItem extends Component {




    render() {


        return (
            <li className="TodoItem">
                {this.props.todos.categories.id} - {this.props.todos.categories.name}
            </li>
        );
    }
}


export default TodoItem;
