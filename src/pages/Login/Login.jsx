import React, { useEffect, useState } from "react";
import Main from "../../layout/Main";
import { Form, Button, Container, Col, Row, Spinner } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "./../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [isFetching, setIsFetching] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {
        loginWithEmailAndPassword,
        registerAndLoginWithProvider,
        setLoading,
    } = useAuth();
    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        setTimeout(function () {
            setIsFetching(false);
        }, 200);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // validation
        if (!email) {
            return toast.error("Please Enter Email!");
        }
        if (!password) {
            return toast.error("Please Enter Password!");
        }

        loginWithEmailAndPassword(email, password)
            .then((result) => {
                form.reset();
                toast.success("Login Successfully!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message.split("Firebase: ").join(""));
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleSignUpWithProvider = (event, providerName) => {
        event.preventDefault();
        if (providerName === "google") {
            popupForSignInProvider(googleProvider);
        }
    };

    const popupForSignInProvider = (provider) => {
        registerAndLoginWithProvider(provider)
            .then((result) => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Main>
            <Helmet>
                <title>Login</title>
            </Helmet>
            {isFetching ? (
                <div
                    style={{ height: "400px" }}
                    className="d-flex justify-content-center align-items-center"
                >
                    <Spinner animation="border" className="spinner-color" />
                </div>
            ) : (
                <Container className="my-5">
                    <Row className="m-0">
                        <Col lg={5} className="m-auto bg-dark p-5">
                            <h2 className="text-white text-center mb-3">
                                Log in
                            </h2>
                            <div className="d-grid gap-2">
                                <Button
                                    className="fs-5 border d-flex justify-content-center"
                                    size="lg"
                                    onClick={(e) =>
                                        handleSignUpWithProvider(e, "google")
                                    }
                                >
                                    <div>
                                        <FaGoogle className="align-baseline mt-1  me-1 fs-4" />
                                    </div>
                                    <div>Continue with Google</div>
                                </Button>
                            </div>
                            <h3 className="text-white text-center mt-2">Or</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label className="text-white">
                                        Email Address
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Enter email"
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label className="text-white">
                                        Password
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        required
                                        name="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <Button
                                    size="lg"
                                    className="text-white border border-white"
                                    variant="outline-dark"
                                    type="submit"
                                >
                                    Login
                                </Button>
                                <hr className="border border-white border-1 opacity-50 mt-5"></hr>
                                <p className="text-white text-center">
                                    Don't have an account?{" "}
                                    <Link
                                        className="text-decoration-underline"
                                        to="/signup"
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )}
        </Main>
    );
};

export default Login;
