import React, { Component } from 'react';
import RestaurantItems from './RestaurantItems';
import './Restaurants.css';
import {Navbar, NavItem} from 'react-materialize';


class Restaurants extends Component {

    constructor(props){
        super(props);
        this.state = {searchString:''}
    }

    render() {

        let restaurantItems;
        let searchRestaurants = this.props.restaurants.filter(
            (restaurant) => {
                return restaurant.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1;
            }
        );

        if(searchRestaurants){

                restaurantItems = searchRestaurants.map(restaurant => {
               return(

                   <RestaurantItems  key={restaurant.R.res_id} restaurants={restaurant}/>
               )
           })

        }

        return (

            <div >
                <Navbar  className='light-blue lighten-2 center'  brand='Review ME' >
                    <NavItem href='get-started.html'>Home</NavItem>
                    <NavItem href='components.html'>Restaurants</NavItem>
                </Navbar>

                <br/>
                <h2>Restaurants</h2>


                <div className="row">
                    {restaurantItems}
                </div>

            </div>
        );
    }
}




export default Restaurants;
