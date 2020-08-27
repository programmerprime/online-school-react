import React from 'react';
import './Cart.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = (props) => {
    let cart = props.cart;

    let totalPrice = cart.reduce((total, courseItem) => total + courseItem.price, 0);
    return (
        <div className="cart-main">
            <h4>Total items added: {cart.length}</h4>
            <h5>Total Price: ${totalPrice}</h5>
            <Button variant="success">Place order</Button>
        </div>
    );
};

export default Cart;