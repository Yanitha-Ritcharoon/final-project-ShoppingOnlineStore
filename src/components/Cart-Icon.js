// display an icon that shows the number of items in the user's cart
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { OrdersContext } from '../App';

function CartIcon(props) {
  const {totalOrders} = useContext(OrdersContext);
    // console.log("CART ICON")
    // console.log(totalOrders)
  return (
    <div onClick={props.onClick} className="cart-icon">
        <FaShoppingCart /> 
        <span className='cart-icon'>{totalOrders}</span>
    </div>
  );
}

export default CartIcon;