import React, { Component } from 'react';
import NearbyRestaurantItems from './NearbyRestaurantItems';
import './Restaurants.css';
import {Navbar, NavItem} from 'react-materialize';
import $ from 'jquery';
import config from '../config';
import axios from 'axios'


class NearbyRestaurants extends Component {

    constructor(props){
        super(props);
        this.state = {
            nearbyRestaurantArray:[]
        };

        this.getRestaurantsByLocation = this.getRestaurantsByLocation.bind(this)
    }

    componentDidMount() {
       navigator.geolocation.getCurrentPosition(this.getRestaurantsByLocation)
    }





    getRestaurantsByLocation(position) {


        let lat = position.coords.latitude;
        let longi = position.coords.longitude;
        let url = "https://developers.zomato.com/api/v2.1/geocode?lat=" +lat + "&lon=" + longi

        $.ajax({
            url: url,
            dataType: 'json',
            headers: {
                'user-key': config.userKey
            },
            success: function (data) {

                this.setState({nearbyRestaurantArray: data.nearby_restaurants}, function () {
                     console.log(this.state);
                })
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            },

        })

    }

    render() {


        let nearbyRestaurants;


        if( this.state.nearbyRestaurantArray){

            nearbyRestaurants = this.state.nearbyRestaurantArray.map(listOfRestaurants => {
                return(

                    <NearbyRestaurantItems  key={listOfRestaurants.restaurant.R.res_id} restaurants={listOfRestaurants.restaurant} />
                )
            })

        }

        return (

            <div >
                <div className="row">
                    {nearbyRestaurants}
                </div>

            </div>
        );
    }
}




export default NearbyRestaurants;
