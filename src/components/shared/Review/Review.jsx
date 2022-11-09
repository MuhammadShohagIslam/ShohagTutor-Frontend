import React from "react";
import { Card, Image } from "react-bootstrap";
import classes from "./Reviews.module.css";
import StarRatings from "react-star-ratings";

const Review = ({ review }) => {
    const { name, comment, img, star,reviewedAt } = review;
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className={classes.reviewCardWrapper}>
                    <Image roundedCircle className={classes.reviewImg} src={img} alt={name} />
                    <StarRatings
                        rating={star}
                        isSelectable={false}
                        starRatedColor="red"
                        numberOfStars={5}
                        starDimension="20px"
                        starSpacing="2px"
                    />
                </div>
                <Card.Title className="pt-2">{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    ReviewedAt: {new Date(reviewedAt).toString().substring(4, 16)}
                </Card.Subtitle>
                <Card.Text className="pb-2">
                   {comment}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Review;
