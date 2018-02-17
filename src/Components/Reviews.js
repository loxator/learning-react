import React, {Component} from 'react';
import ReviewItem from './ReviewItem';
import $ from 'jquery';


class Reviews extends Component {

    constructor (props) {
        super(props);
        this.state = {reviews:[]};
    }

    componentDidMount(){
        this.getReviews(this.props.restID)
    }
    getReviews(restID) {
        $.ajax({
            url: "https://developers.zomato.com/api/v2.1/reviews?res_id=" + restID,
            dataType: 'json',
            headers: {
                'user-key': '511760f1a33f8de086fc291006aa12f9',

            },
            success: function (data) {

                this.setState({reviews: this.state.reviews.concat(data.user_reviews)}, function () {
                   // console.log(this.state);

                })
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            },
            async: false
        })
    }

    render() {

        let reviewItem;
        if(this.state.reviews){
            reviewItem = this.state.reviews.map(review => {
                // console.log(project);
                return(
                    <ReviewItem  key={review.review.id} reviews={review}/>
                )
            });
        }

        return (
            <div  className="Reviews">
                {reviewItem}
            </div>
        );
    }

}

export default Reviews;