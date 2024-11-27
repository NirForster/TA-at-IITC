import { useSelector, useDispatch } from "react-redux"
import { removeItem } from "../store/slices/cartSlice";
const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    console.log(cart);
    
    function handleRemoveItem(id) {
        dispatch(removeItem(id))
    }

    return (
        <div>
            <h2>My Cart</h2>
            <p>Total Item: {cart.totalQuantity}</p>
            <p>Total Price: {cart.totalPrice}</p>
            <ul>
                {cart.items.map((item) => (
                    <li key={item.id} style={{margin: '10px 0'}}>
                        <span>
                            {item.name}: {item.price}₪ x {item.quantity} = ₪{item.totalItemPrice}
                        </span>
                        <button onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cart