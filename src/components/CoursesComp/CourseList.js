import React from 'react';
import {Button} from 'react-bootstrap';
import './CourseList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseList = (props) => {
    console.log(props.course.title);
    let {title, author, rating, price, description, students, img} = props.course;
    return (
        <div className="main-component">
            
            <div className="courseImage">
                <img src={img} alt="CourseImage" style={{width: '300px', height: '200px'}} />
            </div>

            <div className="courseDesc">

            <h3>{title}</h3>
            <p style={{color: 'gray'}}>{description}</p>
            <h4 className="author">By: {author}</h4>
            <h4 className="rating">Rating: {rating}/5</h4>
            <h4 className="price">Price: ${price}</h4>
    
            <p><small>{students} already enrolled</small></p>
            <Button variant="primary" onClick={() => props.enrollBtn(props.course)}>Enroll Now</Button>

            </div>
    
        </div>
    );
};

export default CourseList;