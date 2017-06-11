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
                        <img className="activator" src={this.imageExists(this.props)}/>

                    </div>
                    <div className="card-content">
                        <span className="card-title">{this.props.restaurants.name}</span>
                        <p>Average Cost for 2
                            = {this.props.restaurants.currency} {this.props.restaurants.average_cost_for_two}</p>
                    </div>
                    <div className="card-action">
                        <a href={this.props.restaurants.url}>Look us up on Zomato!</a>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title red-text text-darken-4">Reviews<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            </div>


        );
    }
}



export default RestaurantItems;
