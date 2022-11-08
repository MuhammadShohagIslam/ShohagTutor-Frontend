import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import SectionTitle from "./../../../components/shared/SectionTitle/SectionTitle";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import ContactInfo from "../../../components/shared/ContactInfo/ContactInfo";
import classes from "./Contact.module.css";

const Contact = () => {
    return (
        <Container className="py-5">
            <SectionTitle title="Contact" />
            <Row>
                <ContactInfo
                    title="Location"
                    info="Turkey"
                    icon={<GoLocation className={classes.contactIcon} />}
                />
                <ContactInfo
                    title="Email"
                    info="mdsohag200077@gmail.com"
                    icon={<HiOutlineMail className={classes.contactIcon} />}
                />
                <ContactInfo
                    title="Phone"
                    info="+905075613855"
                    icon={<BiPhoneCall className={classes.contactIcon} />}
                />
            </Row>
        </Container>
    );
};

export default Contact;
