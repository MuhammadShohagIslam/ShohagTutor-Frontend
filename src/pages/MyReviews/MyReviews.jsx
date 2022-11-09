import React, { useState, useEffect } from "react";
import Main from "../../layout/Main";
import { Container, Row, Table, Spinner, Button } from "react-bootstrap";
import axios from "axios";
import { useAuth } from "../../contexts/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import ReviewTable from "../../components/shared/ReviewTable/ReviewTable";
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
            Swal.fire({
                position: "top",
                icon: "error",
                title: `Review ${serviceName} Deleted Successfully`,
                showConfirmButton: false,
                timer: 1500,
            });
            const remainingReviews = reviewsBySpecificUser.filter(
                (review) => review._id !== id
            );
            setReviewsBySpecificUser([...remainingReviews]);
        }
    };

    return (
        <Main>
            <Container className="mt-5">
                <h3 className="text-center py-3">
                    '''Reviews Service By {user?.displayName}'''
                </h3>
                <Row className="m-0">
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
                                <ReviewTable
                                    reviewsBySpecificUser={
                                        reviewsBySpecificUser
                                    }
                                    handleReviewDelete={handleReviewDelete}
                                />
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