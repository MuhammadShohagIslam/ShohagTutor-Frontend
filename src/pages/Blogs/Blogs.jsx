import React from 'react';
import Main from '../../layout/Main';
import { Container,Spinner,Row } from 'react-bootstrap';
import useBlogFetch from '../../hooks/useBlogFetch';
import Blog from '../../components/shared/Blog/Blog';



const Blogs = () => {
    const {data, loading} = useBlogFetch();
    console.log(data)
    return (
        <Main>
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
                                    <h3 className="text-center text-white">
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