import React, {Component} from 'react';

import Projects from './Components/Projects';
import Todo from './Components/Todo';
import Restaurants from './Components/Restaurants';
import NearbyRestaurants from './Components/NearbyRestaurants';
import uuid from 'uuid';
import $ from 'jquery';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            projects: [],
            todos: [],
            restaurants: [],
            restaurantsByLocations: [],
            coordinates: {}
        }


    }




componentDidMount(){
        //this.getRestaurants(16774318)
}





    getRestaurants(restID) {
        for (var i = 0; i < 5; i++) {
            var ID = restID + i

            $.ajax({
                url: "https://developers.zomato.com/api/v2.1/restaurant?res_id=" + ID,
                dataType: 'json',
                headers: {
                    'user-key': '511760f1a33f8de086fc291006aa12f9'
                },
                cache: false,
                success: function (data) {
                    this.setState({
                        restaurants: this.state.restaurants.concat(data)

                    }, function () {
                        console.log(this.state);
                    })
                }.bind(this),
                error: function (xhr, status, err) {
                    console.log(err);
                },

            })
        }

    }




    getProjects() {
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: "Web Development4",
                    category: "Some Category"
                }, {
                    id: uuid.v4(),
                    title: "Web Development2",
                    category: "Some Category"
                },
                {
                    id: uuid.v4(),
                    title: "Web Development3",
                    category: "Some Category"
                }
            ]


        });
    }


    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects})

    }


    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects: projects});

    }


    isEmpty(obj) {
        console.log(obj);
        for(var prop in obj) {
            console.log(obj);
            if(obj.hasOwnProperty(prop))
                console.log(obj);
            return false;
        }

        console.log(JSON.stringify(obj) === JSON.stringify({}))
        return JSON.stringify(obj) === JSON.stringify({});
    }


    render() {


            return( <div>

                    <h1>Around the World!!!</h1>
                    <Restaurants restaurants={this.state.restaurants}/>
                    <hr/>

                    <h1>Restaurants Near you</h1>
                   <NearbyRestaurants />




                </div>
            );

        }


}


export default App;
