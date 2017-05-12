import React, { Component } from 'react';
import Projects from './Components/Projects';
import Todo from './Components/Todo';
import uuid from 'uuid';
import $ from 'jquery';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {

constructor(){
    super();
    this.state = {
        projects:[],
        todos:[]
    }
}

componentWillMount(){
   this.getProjects();
   this.getToDos();
}

    getToDos(){
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/todos",
            dataType:'json',
            cache:false,
            success:function (data) {
                this.setState({todos:data},function(){
                    console.log(this.state);
                })
            }.bind(this),
            error:function (xhr,status,err) {
                console.log(err);
            }
        })
    }

    getProjects(){
        this.setState({projects:[
            {
                id:uuid.v4(),
                title:"Web Development4",
                category:"Some Category"
            },{
                id:uuid.v4(),
                title:"Web Development2",
                category:"Some Category"
            },
            {
                id:uuid.v4(),
                title:"Web Development3",
                category:"Some Category"
            }
        ]


        });
    }



componentDidMount(){
    this.getToDos();
}

handleAddProject(project){
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects:projects})

    }


    handleDeleteProject(id){
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index,1);
        this.setState({projects:projects});

    }

render() {
    return (
      <div className="App">

        <AddProject addProject={this.handleAddProject.bind(this)}/>
          <Projects onDelete={this.handleDeleteProject.bind(this)}projects={this.state.projects}/>
          <hr/>
          <Todo todos={this.state.todos}/>
      </div>
    );
  }
}


export default App;
