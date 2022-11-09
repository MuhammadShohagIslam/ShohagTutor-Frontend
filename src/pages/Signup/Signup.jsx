import React, { useState, useEffect } from "react";
import Main from "../../layout/Main";
import { useAuth } from "./../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Container, Spinner, Row, Col, Button, Form } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Signup = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [accepted, setAccepted] = useState(false);
    const {
        createUser,
        userProfileUpdate,
        registerAndLoginWithProvider,
        setLoading,
    } = useAuth();

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(function () {
            setIsFetching(false);
        }, 200);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // validation
        if (!fullName) {
            return toast.error("Please Enter Full Name!");
        }
        if (!email) {
            return toast.error("Please Enter Email!");
        }
        if (password.length <= 5) {
            return toast.error("Please Enter Valid Password!");
        }

        createUser(email, password)
            .then((result) => {
                form.reset();
                handleProfileUpdate(fullName, photoURL);
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message.split("Firebase: ").join(""));
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleProfileUpdate = (fullName, photoURL) => {
        const profile = {
            displayName: fullName,
            photoURL,
        };
        userProfileUpdate(profile)
            .then(() => {})
            .catch((error) => {
                toast.error(error.message);
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
                navigate("/");
            })
            .catch((error) => {
                toast.error(error?.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Main>
            <Helmet>
                <title>SignUp</title>
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
                            <h2 className="text-white text-center mb-5">
                                Sign Up Connected With Me
                            </h2>

                            <div className="d-grid gap-2">
                                <Button
                                    className="fs-5 text-white border border-white d-flex justify-content-center"
                                    variant="outline-dark"
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
                                    controlId="fullName"
                                >
                                    <Form.Label className="text-white">
                                        Full Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        placeholder="Enter Full Name"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="photoURL"
                                >
                                    <Form.Label className="text-white">
                                        PhotoURL
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="photoURL"
                                        placeholder="Enter PhotoURL"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label className="text-white">
                                        Email address
                                    </Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email"
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="password"
                                >
                                    <Form.Label className="text-white">
                                        Password
                                    </Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox"
                                >
                                    <Form.Check
                                        className="text-white"
                                        type="checkbox"
                                        onClick={(e) =>
                                            setAccepted(e.target.checked)
                                        }
                                        label={
                                            <>
                                                By Register, you agree to our
                                                <Link
                                                    className="mx-1 text-decoration-underline"
                                                    to="/term-condition"
                                                >
                                                    Terms of Use
                                                </Link>
                                                and
                                                <Link
                                                    className="ms-1 text-decoration-underline"
                                                    to="/privacy-policy"
                                                >
                                                    Privacy Policy
                                                </Link>
                                            </>
                                        }
                                    />
                                </Form.Group>
                                <Button
                                    size="lg"
                                    className="text-white border border-white"
                                    variant="outline-dark"
                                    type="submit"
                                    disabled={!accepted}
                                >
                                    Register
                                </Button>
                                <hr className="border border-white border-1 opacity-50 mt-5"></hr>
                                <p className="text-white text-center">
                                    Already have an account?{" "}
                                    <Link
                                        className="text-decoration-underline"
                                        to="/login"
                                    >
                                        Log in
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

export default Signup;
