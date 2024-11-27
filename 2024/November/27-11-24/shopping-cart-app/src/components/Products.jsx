const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Headphones', price: 100 },
];

// Redux Imports
import { addItem } from '../store/slices/cartSlice.js'
import { useDispatch } from "react-redux";

const Products = () => {
    const dispatch = useDispatch()

    function handleAddItem(item) {
        const itemData = {
            ...item,
            quantity: 1,
            totalItemPrice: item.price
        }

        dispatch(addItem(itemData))
    }

    return (
        <div>
            <h2>Products List</h2>
            {products.map((prod) => (
                <div key={prod.id}>
                    <span>
                        {prod.name} - {prod.price}₪
                    </span>
                    <button onClick={() => handleAddItem(prod)}>Add To Cart</button>
                </div>
            ))}
        </div>
    )
}

export default Products