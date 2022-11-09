import React, { useEffect } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import classes from "./ServiceCard.module.css";
import { avgRating } from "../../../utils/avgRating";
import useFetch from "./../../../hooks/useFetch";
import { PhotoProvider, PhotoView } from "react-photo-view";
import AOS from "aos";

const ServiceCard = ({ service }) => {
    const { _id, img, name, description, price } = service;
    const { data: reviews } = useFetch(
        `http://localhost:5000/reviews?id=${_id}`
    );
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <Col data-aos="fade-up" lg={4} md={6} sm={12} className="mb-4">
                <Card className={classes.serviceCard}>
                    <Card.Header className="bg-white text-center py-2 pb-3">
                        {avgRating(reviews)}
                    </Card.Header>
                    <PhotoProvider
                        speed={() => 800}
                        easing={(type) =>
                            type === 2
                                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                        }
                    >
                        <PhotoView src={img}>
                            <Card.Img
                                className={`${classes.serviceCardImage} rounded-0`}
                                variant="top"
                                alt={name}
                                src={img}
                            />
                        </PhotoView>
                    </PhotoProvider>

                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <Card.Text className="text-justify">
                            {description?.length > 100
                                ? description.slice(0, 100) + "..."
                                : description}
                        </Card.Text>
                        <div className={classes.serviceCostRating}>
                            <h5>
                                <span>Per Month: </span>${price}
                            </h5>
                        </div>
                        <Link
                            className={`${classes.serviceCardButtonWrapper} pt-2`}
                            to={`/services/${_id}`}
                        >
                            <Button className={`${classes.serviceCardButton}`}>
                                Service Details
                                <FaArrowRight className="ms-1" />
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default ServiceCard;
