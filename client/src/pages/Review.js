import React, {Component} from "react";
import ReviewCard from "../components/ReviewCard"
import StarReview from "../components/StarReview"
import Comment from "../components/Comment"

const Review = (props) => (
    <div>
        <div className="row">

            <div className="col sm-9">
                <ReviewCard {...props}/>
                <StarReview />
            </div>
            
            <div className="col sm-3">
                <Comment />
            </div>
        
        </div>
    </div>
);
  
export default Review;
