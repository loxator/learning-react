import React, { Component } from 'react';
import RestaurantItems from './RestaurantItems';
import './Restaurants.css'


class Restaurants extends Component {


    render() {

        let restaurantItems
        if(this.props.restaurants){

                restaurantItems = this.props.restaurants.map(restaurant => {
               console.log(restaurant);
               return(

                   <RestaurantItems  key={restaurant.R.res_id} restaurants={restaurant}/>
               )
           })

        }

        return (

            <div  className="Restaurants">
                <ul className="NavigationBar">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="default.asp">Restaurants</a></li>
                    <li><a href="default.asp">Electronics</a></li>
                    <li><a href="default.asp">Hotels</a></li>
                </ul>
                <br/>

                {restaurantItems}

            </div>
        );
    }
}




export default Restaurants;
