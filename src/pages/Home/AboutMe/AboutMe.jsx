import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import profileImg from "../../../images/PP.jpg";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
    return (
        <Container className="py-5">
            <SectionTitle
                title="About Me"
                info="I am Reviewing classroom or curricula topics and assignments. Assisting students with homework, projects, test preparation, papers, research and other academic tasks."
            />
            <Row>
                <Col md={6} lg={4}>
                    <div className={classes.profileImgWrapper}>
                        <img className={classes.profileImg} src={profileImg} alt="Profile" />
                    </div>
                </Col>

                <Col md={6} lg={8}>
                    <div className={classes.aboutTextWrapper}>
                        <p className={classes.aboutText}>
                            I am Reviewing classroom or curricula topics and
                            assignments. Assisting students with homework,
                            projects, test preparation, papers, research and
                            other academic tasks.
                        </p>

                        <Row>
                            <Col lg={4}>
                                <ul className={classes.aboutTextList}>
                                    <li className={classes.aboutTextListItem}>
                                        <span
                                           className={
                                            classes.aboutTextListItemSpan
                                        }
                                        >
                                            NAME :
                                        </span>{" "}
                                       Muhammad Shohag Islam
                                    </li>
                                    <li
                                        className={
                                            classes.aboutTextListItemSpan
                                        }
                                    >
                                        <span
                                            className={
                                                classes.aboutTextListItemSpan
                                            }
                                        >
                                            AGE :
                                        </span>{" "}
                                        24
                                    </li>
                                </ul>
                            </Col>

                            <Col lg={8}>
                                <ul className={classes.aboutTextList}>
                                    <li className={classes.aboutTextListItem}>
                                        <span
                                            className={
                                                classes.aboutTextListItemSpan
                                            }
                                        >
                                            JOB TITLE :
                                        </span>{" "}
                                       Teacher
                                    </li>
                                    <li className={classes.aboutTextListItem}>
                                        <span
                                            className={
                                                classes.aboutTextListItemSpan
                                            }
                                        >
                                            LOCATION :
                                        </span>{" "}
                                        Bangladesh
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                        <div>
                            <a href="#" className="custom-btn me-3">
                                DOWNLOAD CV
                            </a>
                            <a href="#" className="custom-btn">
                                Call ME
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;
