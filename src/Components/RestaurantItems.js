import React, { Component } from 'react';



class RestaurantItems extends Component {




    render() {


        return (
            <li className="RestaurantItems">
                {this.props.restaurants.R.rest_id}
                {this.props.restaurants.name}
                {this.props.restaurants.cuisines}
                {this.props.restaurants.featured_image}
                {this.props.restaurants.menu_url}
            </li>

        );
    }
}


export default RestaurantItems;
