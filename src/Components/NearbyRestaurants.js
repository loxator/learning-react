import React, { Component } from 'react';
import NearbyRestaurantItems from './NearbyRestaurantItems';
import './Restaurants.css';
import {Navbar, NavItem} from 'react-materialize';
import $ from 'jquery';
import config from '../config';


class NearbyRestaurants extends Component {

    constructor(props){
        super(props);
        this.state = {searchString:'',
                      coordinates : {},
            nearbyRestaurantArray:[]
        }


    }


    componentDidMount() {
        this.getLocation();
    }


    updateSearch(event){
        this.setState({searchString:event.target.value.substring(0,20)});
    }


    getLocation() {
        $.ajax({
            url: "http://api.ipstack.com/check?access_key="+config.accessKey,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({
                    coordinates: data,
                    loading:false
                }, function () {

                    this.getRestaurantsByLocation(data.latitude,data.longitude)
                })
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            },

        })
    }
    getRestaurantsByLocation(lat, longi) {
        $.ajax({
            url: "https://developers.zomato.com/api/v2.1/geocode?lat=" + lat + "&lon=" + longi,
            dataType: 'json',
            headers: {
                'user-key': config.userKey
            },
            success: function (data) {

                this.setState({nearbyRestaurantArray: data.nearby_restaurants}, function () {
                   // console.log(this.state);

                })
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            },
            async: false
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
