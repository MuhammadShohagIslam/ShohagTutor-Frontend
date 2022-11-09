import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import ServiceCard from "../../components/shared/ServiceCard/ServiceCard";
import Main from "../../layout/Main";
import useFetch from "./../../hooks/useFetch";
import { Helmet } from "react-helmet-async";
import AOS from 'aos';

const Services = () => {
    const { data, loading } = useFetch("http://localhost:5000/services");

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    return (
        <Main>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <Container className="py-5">
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
                        </>
                    )}
                </Row>
            </Container>
        </Main>
    );
};

export default Services;
