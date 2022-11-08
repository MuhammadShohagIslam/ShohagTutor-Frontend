import React from 'react';
import { Container,Row } from 'react-bootstrap';
import SectionTitle from './../../../components/shared/SectionTitle/SectionTitle';
import ServiceCard from './../../../components/shared/ServiceCard/ServiceCard';
import { Spinner } from 'react-bootstrap';
import useServiceFetch from './../../../hooks/useServiceFetch';

const Services = () => {
    const { data, loading } = useServiceFetch("http://localhost:5000/services?limit=3");
    console.log(data);
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
                            <Spinner animation="border" className="spinner-color" />
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
                                <h3 className="text-center text-white">
                                    There is no course
                                </h3>
                            )}
                        </>
                    )}
            </Row>
        </Container>  
        </>
    );
};

export default Services;