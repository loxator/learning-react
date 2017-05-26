import React, {Component} from 'react';
import './RestaurantItems.css'


class RestaurantItems extends Component {


    imageExists(props) {
        let image = props.restaurants.featured_image;
        if (image === "") {
            return (
                    <div className="img">
                    <img src="http://www.freefoodphotos.com/imagelibrary/bread/slides/bread_roll.jpg" alt="" />
                    </div>


            )
        }
        else {
            return (
                <div className="img">
                    <img src={this.props.restaurants.featured_image} alt=""/>
                </div>

            )
        }
    }

    render() {


        return (
            <div class="row">
                <div className="column">
                    <div className="card">
                        <br/>
                        {this.imageExists(this.props)}
                        <div className="container">
                         <h2>{this.props.restaurants.name}</h2>
                        <p className="title">{this.props.restaurants.name}</p>
                        <p>Average Cost for 2 is {this.props.restaurants.currency} {this.props.restaurants.average_cost_for_two}</p>
                        <p>example@example.com</p>
                        <p>
                            <button className="button" onclick={this.props.restaurants.url}>Contact</button>
                        </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default RestaurantItems;
