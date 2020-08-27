import React from 'react';
import CourseList from '../CoursesComp/CourseList';
import fakeData from '../../fakeData/courses';
import Cart from '../Cart/Cart';
import { useState } from 'react';


const Shop = () => {

    let [cart, setCart] = useState([]);

    let enrollBtn = (course) => {
        let newCart = [...cart, course];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
            <div className="course-container">
            {
            fakeData.map(course => <CourseList course = {course} enrollBtn={enrollBtn}></CourseList>)
            } 
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;