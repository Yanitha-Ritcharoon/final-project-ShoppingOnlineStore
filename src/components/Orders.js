import React, { useContext }from "react";
import { OrdersContext } from "../App";
import Cart from "./Cart";

function Orders() {
    const {cartItems, setCartItems} = useContext(OrdersContext);
        // console.log("ORDERS")
        // console.log(cartItems)
    return (
        <div>
            <Cart cartItems={cartItems} setCartItems={setCartItems}/>
        </div>
    );
};

export default Orders;