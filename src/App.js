import React, {Component} from 'react';

import Restaurants from './Components/Restaurants';
import NearbyRestaurants from './Components/NearbyRestaurants';
import $ from 'jquery';
import './App.css';
import config from './config'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            restaurants: [],
            restaurantsByLocations: [],
            coordinates: {}
        }


    }




componentDidMount(){
       this.getRestaurants(5603322)
}





    getRestaurants(restID) {
        for (var i = 0; i < 20; i++) {
            var ID = restID + i

            $.ajax({
                url: "https://developers.zomato.com/api/v2.1/restaurant?res_id=" + ID,
                dataType: 'json',
                headers: {
                    'user-key': config.userKey
                },
                cache: false,
                success: function (data) {
                    this.setState({
                        restaurants: this.state.restaurants.concat(data)

                    }, function () {
                        //console.log(this.state);
                    })
                }.bind(this),
                error: function (xhr, status, err) {
                    console.log(err);
                },

            })
        }

    }





    render() {


            return(

                <div>

                 <Restaurants restaurants={this.state.restaurants}/>
                 <hr/>

                    <h2>Restaurants Near you</h2>
                    <NearbyRestaurants />


                </div>
            );

        }


}


export default App;
