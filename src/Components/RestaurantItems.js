import React, {Component} from 'react';
import './RestaurantItems.css';

class RestaurantItems extends Component {


    imageExists(props) {
        let image = props.restaurants.featured_image;
        if (image === "") {
            return "http://www.freefoodphotos.com/imagelibrary/bread/slides/bread_roll.jpg"

        }
        else {
            return image

        }
    }

    render() {


        return (

                <div className="col m3">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.imageExists(this.props)}/>
                                <span className="card-title" >{this.props.restaurants.name}</span>
                        </div>
                        <div className="card-content">
                            <p>Average Cost for 2 = {this.props.restaurants.currency} {this.props.restaurants.average_cost_for_two}</p>
                        </div>
                        <div className="card-action">
                            <a href={this.props.restaurants.url}>Look us up on Zomato!</a>
                        </div>
                    </div>
                </div>


        );
    }
}



export default RestaurantItems;
