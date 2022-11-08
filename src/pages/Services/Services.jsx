import React from "react";
import { Container, Row } from "react-bootstrap";
import ServiceCard from "../../components/shared/ServiceCard/ServiceCard";
import Main from "../../layout/Main";
import useServiceFetch from "./../../hooks/useServiceFetch";

const Services = () => {
    const { data, loading } = useServiceFetch("http://localhost:5000/services");
    console.log(data);
    return (
        <Main>
            <Container className="py-5">
                <Row>
                    {data.map((service) => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
                </Row>
            </Container>
        </Main>
    );
};

export default Services;
