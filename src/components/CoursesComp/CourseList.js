import React from 'react';
import {Button} from 'react-bootstrap';
import './CourseList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseList = (props) => {
    console.log(props.course.title);
    let {title, author, rating, price, description, students} = props.course;
    return (
        <div className="main-component">
            <h2>{title}</h2>
            <p style={{color: 'gray'}}>{description}</p>
            <h3 className="author">By: {author}</h3>
            <h3 className="rating">Rating: {rating}/5</h3>
            <h4 className="price">Price: ${price}</h4>
    
            <p><small>{students} already enrolled</small></p>
            <Button variant="primary">Enroll Now</Button>
    
        </div>
    );
};

export default CourseList;