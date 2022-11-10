import React from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionTitle from "./../../../components/shared/SectionTitle/SectionTitle";
import ServiceCard from "./../../../components/shared/ServiceCard/ServiceCard";
import useFetch from "./../../../hooks/useFetch";
import classes from './Services.module.css';

const Services = () => {
    const { data, loading } = useFetch(
        "https://server-smoky-ten.vercel.app/services?limit=3"
    );

    return (
        <>
            <Container className="py-5">
                <SectionTitle
                    title="Services"
                    info="Check my core service below"
                />
                <Row>
                    {loading ? (
                        <div
                            style={{ height: "400px" }}
                            className="d-flex justify-content-center align-items-center"
                        >
                            <Spinner
                                animation="border"
                                className="spinner-color"
                            />
                        </div>
                    ) : (
                        <>
                            {data.length > 0 ? (
                                <>
                                    {data.map((service) => (
                                        <ServiceCard
                                            key={service._id}
                                            service={service}
                                        />
                                    ))}
                                </>
                            ) : (
                                <h3 className="text-center text-dark">
                                    There is no Services
                                </h3>
                            )}
                            <div className="text-center">
                                <Link to="/services">
                                    <Button className={`${classes.seeAllButton} btn`} size="lg">
                                        See All
                                    </Button>
                                </Link>
                            </div>
                        </>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default Services;
