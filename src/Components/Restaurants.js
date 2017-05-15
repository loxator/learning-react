import React, { Component } from 'react';
import RestaurantItems from './RestaurantItems';


class Restaurants extends Component {


    render() {

        let restaurant = this.props.restaurants;
        if(restaurant){

            console.log(restaurant);
            <RestaurantItems  restaurant={restaurant}/>

        }

        return (
            <div  className="Projects">
          <li>
              {restaurant.name}
          </li>
                <li><img src = {restaurant.featured_image}/>  </li>
                <li>   {restaurant.cuisines} </li>

                <li>{restaurant.menu_url}   </li>




            </div>
        );
    }
}




export default Restaurants;
