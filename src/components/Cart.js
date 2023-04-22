import React, { useState, useEffect, useContext} from 'react';
import { FaTrash } from 'react-icons/fa';
import { OrdersContext } from '../App';

function Cart({cartItems, setCartItems}) {
    // console.log(cartItems)
    const [cart, setCarts] = useState({}); 
    const {totalOrders, setTotalOrders} = useContext(OrdersContext);

    useEffect(() => {
        // Fetching all carts from fakestoreapi and setting them in state
        fetch('https://fakestoreapi.com/carts')
        .then(res => res.json())
        .then(json => setCarts(json));
    }, []);

    const handleUpdateProduct = (productId, valueToAdd) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === productId
                ? { ...item, quantity: item.quantity + valueToAdd }
                : item
            )
        );
    };


    const handleDeleteCart = (cartId) => {
        setTotalOrders(totalOrders - 1)
        setCartItems(cartItems.filter((item, index) => item.id !== cartId))
    };

    return (
        <div>
            <h2>Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {cartItems && 
                        cartItems.map((cart) => {
                            return (
                                <tr key={cart.id}>
                                    <td>{cart.title}</td>
                                    <td><img src={cart.image} alt={cart.title}/></td>
                                    <td>${cart.price}</td>
                                    <td>
                                        <button onClick={() => handleUpdateProduct(cart.id, -1)}>-</button>
                                        {cart.quantity ? cart.quantity.toString() : ""}
                                        <button onClick={() => handleUpdateProduct(cart.id, 1)}>+</button>
                                    </td>
                                    <td>${cart.price * cart.quantity}</td>
                                    <td>
                                        <button onClick={() => handleDeleteCart(cart.id)}><FaTrash /></button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Sub Total</td>
                        <td>{`${cartItems.reduce((acc, curr) => 
                            acc+(curr.price *curr.quantity), 0.00)}`}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Tax</td>
                        <td>{`${(cartItems.reduce((acc, curr) => 
                            acc+(curr.price *curr.quantity), 0.00) * .0765).toFixed(2)}`}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>{`${(cartItems.reduce((acc, curr) => 
                            acc+(curr.price *curr.quantity), 0.00) * 1.0765).toFixed(2)}`}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Cart;