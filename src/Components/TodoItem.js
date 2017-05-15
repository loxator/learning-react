import React, { Component } from 'react';



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
