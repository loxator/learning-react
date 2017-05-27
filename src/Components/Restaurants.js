import React, { Component } from 'react';
import RestaurantItems from './RestaurantItems';
import './Restaurants.css';
import {Navbar, NavItem} from 'react-materialize';


class Restaurants extends Component {

    constructor(props){
        super(props);
        this.state = {searchString:''}
    }



    updateSearch(event){
        this.setState({searchString:event.target.value.substring(0,20)});
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
                <Navbar  className='light-blue lighten-2'  brand='Review ME' right>
                    <NavItem href='get-started.html'>Home</NavItem>
                    <NavItem href='components.html'>Restaurants</NavItem>
                    <NavItem href='components.html'>Hotels</NavItem>
                    <NavItem href='components.html'>Electronics</NavItem>
                </Navbar>

                <br/>

                <nav>
                    <div className="nav-wrapper light-blue lighten-2">
                        <form>
                            <div className="input-field">
                                <input id="search" type="search" required value={this.state.searchString} onChange={this.updateSearch.bind(this)}
                                        placeholder = "Search"/>
                                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                    <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>

                <div className="row">
                    {restaurantItems}
                </div>

            </div>
        );
    }
}




export default Restaurants;
