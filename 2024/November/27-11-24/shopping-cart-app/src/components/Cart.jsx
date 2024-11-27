import { useSelector } from "react-redux"

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart);
    
    return (
        <div>
            <h2>My Cart</h2>
            <p>Total Item: {cart.totalQuantity}</p>
            <p>Total Price: {cart.totalPrice}</p>
        </div>
    )
}

export default Cart