import React, { Component } from 'react';



class ReviewItem extends Component {




    render() {


        return (

            <ul className="ReviewItem">
                <hr/>
               {this.props.reviews.review.user.name} rated it {this.props.reviews.review.rating}
               <br/>
               They said: <br/>
                {this.props.reviews.review.review_text}
                <hr/>
            </ul>

        );
    }
}


export default ReviewItem;
