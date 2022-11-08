import React from "react";
import { Col } from "react-bootstrap";
import classes from "./ContactInfo.module.css";

const ContactInfo = ({ title, info, icon }) => {
    return (
        <Col md={6} lg={4} className="mb-3">
            <div className={classes.contactInfo}>
                <div className={classes.contactIcon}>{icon}</div>
                <div className="ms-3">
                    <h4>{title}: </h4>
                    <p className="text-justify">{info}</p>
                </div>
            </div>
        </Col>
    );
};

export default ContactInfo;
