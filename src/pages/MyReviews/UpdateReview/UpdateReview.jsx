import React, { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import Main from "../../../layout/Main";

const UpdateReview = () => {
    const [comment, setComment] = useState("");
    const [review, setReview] = useState([]);
    const [star, setStar] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        loadingReviewById(id);
    }, [id]);

    const loadingReviewById = async (id) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/reviews/${id}`
            );
            const data = await response.data;
            setReview(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const updateReview = async (reviewUpdateObj) => {
        const response = await axios.put(
            `http://localhost:5000/reviews/${id}`,
            reviewUpdateObj,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.data;
        console.log(data);
    };

    const handleClickRating = (newRating) => {
        setStar(newRating);
    };

    const handleUpdateReviewSubmit = (event) => {
        event.preventDefault();

        const reviewUpdateObj = {
            body: comment,
            star,
        };
        updateReview(reviewUpdateObj);
        setComment("");
    };

    console.log(id);
    return (
        <Main>
            <Container className="my-5">
                <Row>
                    <Col lg={5} className="m-auto text-white bg-dark p-5">
                        <h2 className="text-white text-center mb-3">
                            Update Review
                        </h2>
                        <h5 className="text-center">
                            The Service Name Of {review.serviceName}
                        </h5>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicComment"
                            >
                                <Form.Label>Comment</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="comment"
                                    defaultValue={review.body}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Leave a comment here"
                                    style={{ height: "100px" }}
                                />
                            </Form.Group>
                            <h6 className="pb-2">Rating</h6>
                            <StarRatings
                                rating={review.star}
                                starRatedColor="red"
                                changeRating={handleClickRating}
                                numberOfStars={5}
                                starDimension="30px"
                                name={review._id}
                            />

                            <div className="pt-4">
                                <Button
                                    className={`btn`}
                                    variant="primary"
                                    type="submit"
                                    onClick={(e) => {
                                        handleUpdateReviewSubmit(e);
                                    }}
                                >
                                    Save
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Main>
    );
};

export default UpdateReview;
