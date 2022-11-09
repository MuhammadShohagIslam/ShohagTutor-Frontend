import React, { useState, useEffect } from "react";
import Main from "../../layout/Main";
import { Container, Row, Table, Spinner, Button } from "react-bootstrap";
import axios from "axios";
import { useAuth } from "../../contexts/AuthProvider/AuthProvider";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import classes from "./MyReviews.module.css";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
const MyReviews = () => {
    const [reviewsBySpecificUser, setReviewsBySpecificUser] = useState();
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        loadingReviewsBySpecificUser(user?.displayName);
    }, [user?.displayName]);

    const loadingReviewsBySpecificUser = async (user) => {
        try {
            setLoading(true);
            console.log(user);
            const response = await axios.get(
                `http://localhost:5000/reviews?name=${user?.displayName}`
            );
            const data = await response.data;
            setReviewsBySpecificUser(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    const handleReviewDelete = async (id, serviceName) => {
        console.log(id);
        const response = await axios.delete(
            `http://localhost:5000/reviews/${id}`
        );
        const data = await response.data;
        if (data?.deletedCount > 0) {
            toast.error(`Review ${serviceName} Deleted Successfully`);
            const remainingReviews = reviewsBySpecificUser.filter(
                (review) => review._id !== id
            );
            setReviewsBySpecificUser([...remainingReviews]);
        }
    };
    console.log(reviewsBySpecificUser);
    const handleReviewEdit = (id) => {};

    return (
        <Main>
            <Container className="mt-5">
                <h3 className="text-center py-3">
                    '''Reviews Service By {user?.displayName}'''
                </h3>
                <Row>
                    {loading ? (
                        <div
                            style={{ height: "300px" }}
                            className="d-flex justify-content-center align-items-center"
                        >
                            <Spinner
                                animation="border"
                                className="spinner-color"
                            />
                        </div>
                    ) : (
                        <>
                            {reviewsBySpecificUser.length > 0 ? (
                                <Table
                                    className="text-center"
                                    striped
                                    bordered
                                    hover
                                    variant="dark"
                                >
                                    <thead>
                                        <tr>
                                            <th>Service Name</th>
                                            <th>Review</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reviewsBySpecificUser.map(
                                            (userReview) => (
                                                <tr key={userReview._id}>
                                                    <td>
                                                        {userReview.serviceName}
                                                    </td>
                                                    <td>
                                                        <StarRatings
                                                            rating={
                                                                userReview.star
                                                            }
                                                            isSelectable={false}
                                                            starRatedColor="red"
                                                            numberOfStars={5}
                                                            starDimension="20px"
                                                            starSpacing="2px"
                                                        />
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to={`/my-reviews/update/${userReview._id}`}
                                                        >
                                                            <Button
                                                                onClick={() =>
                                                                    handleReviewEdit(
                                                                        userReview._id
                                                                    )
                                                                }
                                                                className="btn"
                                                            >
                                                                <AiOutlineEdit />
                                                            </Button>
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={() =>
                                                                handleReviewDelete(
                                                                    userReview._id,
                                                                    userReview.serviceName
                                                                )
                                                            }
                                                            className={`${classes.dangerButton} btn`}
                                                        >
                                                            <AiOutlineDelete />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </Table>
                            ) : (
                                <h3 className="text-center text-dark">
                                    No reviews were added
                                </h3>
                            )}
                        </>
                    )}
                </Row>
            </Container>
        </Main>
    );
};

export default MyReviews;
