import React, { Component } from 'react';



class TodoItem extends Component {




    render() {


        return (
            <li className="Projects">
                {this.props.todos.id} - {this.props.todos.title}
            </li>
        );
    }
}


export default TodoItem;
