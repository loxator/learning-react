import React, {Component} from 'react';
import './RestaurantItems.css';
import $ from 'jquery';

class NearbyRestaurantItems extends Component {
    constructor(props){
        super(props);
        this.state = {reviews:[]};


    }


        componentWillMount(){
                this.getReviews(this.props.restaurants.id)
        }

        getReviews(restID){
            $.ajax({
                url: "https://developers.zomato.com/api/v2.1/reviews?res_id=" + restID,
                dataType: 'json',
                headers: {
                    'user-key': '511760f1a33f8de086fc291006aa12f9',

                },
                success: function (data) {

                    this.setState({reviews: this.state.reviews.concat(data.user_reviews)}, function () {
                        console.log(this.state);

                    })
                }.bind(this),
                error: function (xhr, status, err) {
                    console.log(err);
                },
                async: false
            })
        }



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

        console.log(this.state);
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
         <br/>
         <p>Average User rating = {this.props.restaurants.user_rating.aggregate_rating}</p>
         </div>
         <div className="card-action">
         <a href={this.props.restaurants.url}>Look us up on Zomato!</a>
         </div>
         <div className="card-reveal">
         <span className="card-title red-text text-darken-4">Reviews<i className="material-icons right">close</i></span>

             <p>
                 //TODO: Figure out how to display reviews in each card.
                 {/*{
                 this.state.reviews.map(review => {
                    console.log(review.review.id);
                     review.review.id



                 })
             }*/}

             Place holder
             </p>




         </div>
         </div>
         </div>
        );


    }
}



export default NearbyRestaurantItems;
