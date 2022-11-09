import React from 'react';
import Main from '../../layout/Main';
import { Container,Spinner,Row } from 'react-bootstrap';
import Blog from '../../components/shared/Blog/Blog';
import useFetch from '../../hooks/useFetch';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    const {data, loading } = useFetch("http://localhost:5000/blogs");
    
    return (
        <Main>
            <Helmet>
                <title>Blog</title>
            </Helmet>
             <article className="mt-5 mb-4">
                <Container>
                    <Row className="ms-0 me-0">
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
                                        {data.map((blog) => (
                                            <Blog key={blog._id} blog={blog} />
                                        ))}
                                    </>
                                ) : (
                                    <h3 className="text-center text-dark">
                                        There is no blog post
                                    </h3>
                                )}
                            </>
                        )}
                    </Row>
                </Container>
            </article>
        </Main>
    );
};

export default Blogs;