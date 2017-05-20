import React, { Component } from 'react';
import RestaurantItems from './RestaurantItems';


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

                {restaurantItems}

            </div>
        );
    }
}




export default Restaurants;
