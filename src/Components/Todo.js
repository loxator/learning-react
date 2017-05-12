import React, { Component } from 'react';
import TodoItem from './TodoItem';


class Todo extends Component {


    render() {

        let todoItems;
        if(this.props.todos){
            todoItems = this.props.todos.map(todos => {
                // console.log(project);
                return(
                    <TodoItem  key={todos.title} todos={todos}/>
                )
            });
        }

        return (
            <div  className="Projects">
                {todoItems}
            </div>
        );
    }
}




export default Todo;
