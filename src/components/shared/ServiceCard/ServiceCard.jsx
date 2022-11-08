import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import classes from "./ServiceCard.module.css";

const ServiceCard = ({ service }) => {
    const { _id, img, name, description, price } = service;
    return (
        <>
            <Col lg={4} md={6} sm={12} className="mb-4">
                <Card className={classes.serviceCard}>
                    <Card.Img
                        className={classes.serviceCardImage}
                        variant="top"
                        alt={name}
                        src={img}
                    />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <Card.Text className="text-justify">
                            {description?.length > 100
                                ? description.slice(0, 100) + "..."
                                : description}
                        </Card.Text>
                        <div className={classes.serviceCostRating}>
                            <h5>
                                <span>Per Month: </span>
                                {price}
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
