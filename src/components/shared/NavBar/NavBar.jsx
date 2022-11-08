import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import classes from "./NavBar.module.css";

const NavBar = () => {
    return (
        <>
            <Navbar
                className={`${classes.navBar}`}
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand className={classes.logo}>
                            ShohagTutor
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className={`${classes.centerNavbar} d-flex justify-content-lg-between align-items-lg-center`}
                        >
                            <div className={classes.navItemMiddle}>
                                <LinkContainer to="/">
                                    <Nav.Link className={classes.navLink}>
                                        Home
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/services">
                                    <Nav.Link className={classes.navLink}>
                                        Service
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/blog">
                                    <Nav.Link className={classes.navLink}>
                                        Blog
                                    </Nav.Link>
                                </LinkContainer>
                            </div>
                            <div className="d-lg-flex">
                                <LinkContainer to="/login">
                                    <Nav.Link
                                        className={`${classes.navLink} me-lg-0 me-2`}
                                    >
                                        Login
                                    </Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/signup">
                                    <Nav.Link className={classes.navLink}>
                                        SignUp
                                    </Nav.Link>
                                </LinkContainer>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
