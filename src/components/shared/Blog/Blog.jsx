import React from "react";
import { Col } from "react-bootstrap";
import classes from "./Blog.module.css";

const Blog = ({ blog }) => {
    return (
        <Col md={8} className="m-auto bg-white mb-4">
            <div className={classes.singleBlog}>
                <h2 className={classes.blogTitle}>{blog.title}</h2>
                <h6 className="mb-4">
                    Author: {blog.author} - Published:{" "}
                    {new Date(blog.publishedAt).toString().substr(4, 11)}
                </h6>
                <p className={classes.blogDescription}>{blog.description}</p>
            </div>
        </Col>
    );
};

export default Blog;
