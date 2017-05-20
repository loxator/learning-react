import React, { Component } from 'react';



class RestaurantItems extends Component {


 imageExists(props){
    let image = props.restaurants.featured_image;
    if(image === "") {
        return (
            <div>
                Photo of the Day <br/> <img src="http://www.freefoodphotos.com/imagelibrary/bread/slides/bread_roll.jpg"
                                            height="100" width="100"/><br />
            </div>

        )
    }
        else{
            return(
                <div>
                    Photo of the Day <br/>  <img src={this.props.restaurants.featured_image} alt="" height="100" width="100"/><br />
                </div>

            )
        }
    }

    render() {


        return (
            <li className="RestaurantItems">
                <strong>{this.props.restaurants.R.res_id} </strong> - {this.props.restaurants.name} <br />

                URL - {this.props.restaurants.url} <br />

                {this.imageExists(this.props)}


            </li>

        );
    }
}


export default RestaurantItems;
