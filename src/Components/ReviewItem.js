import React, { Component } from 'react';



class ReviewItem extends Component {




    render() {
console.log(this.props.reviews.review)

        return (

            <ul className="ReviewItem">
                <hr/>
                <p> {this.props.reviews.review.user.name} rated it {this.props.reviews.review.rating} &#9733; </p>
               <br/>
               They said: <br/>
                <p> {this.props.reviews.review.review_text} </p>
                <hr/>
            </ul>

        );
    }
}


export default ReviewItem;
