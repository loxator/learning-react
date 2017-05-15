import React, { Component } from 'react';
import Projects from './Components/Projects';
import Todo from './Components/Todo';
import Restaurants from './Components/Restaurants';
import uuid from 'uuid';
import $ from 'jquery';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {

constructor(){
    super();
    this.state = {
        projects:[],
        todos:[],
        restaurants:{}
    }

}

componentWillMount(){
  /* this.getProjects();
   //this.getToDos();*/
   this.getRestaurants('16774318');
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

    getRestaurants(restID){
        $.ajax({
            url:"https://developers.zomato.com/api/v2.1/restaurant?res_id="+restID,
            dataType:'json',
            headers: {
                'user-key': '511760f1a33f8de086fc291006aa12f9'
            },
            cache:false,
            success:function (data) {
                this.setState({
                    restaurants:data
                },function(){
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



          <hr/>
          <Restaurants restaurants={this.state.restaurants}/>

      </div>
    );
  }
}


export default App;
