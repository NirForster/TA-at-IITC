import { createSlice } from '@reduxjs/toolkit'

const initialItems = [
    { id: 1234, name: "Coca Cola Bottle", price: 8.90, quantity: 3, totalItemPrice: 26.70 },
    { id: 5849, name: "Mana-Hama", price: 7, quantity: 3, totalItemPrice: 21 }
];

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: initialItems, totalQuantity: 6, totalPrice: initialItems.reduce((acc, item) => acc + item.totalItemPrice, 0) },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
            state.totalQuantity++
            state.totalPrice += action.payload.price
        },
        removeItem: (state, action) => {
            // 1. Find Item Index
            const itemIndex = state.items.findIndex((item) => item.id === action.payload)

            // 2. Filter Index
            const item = state.items[itemIndex]
            state.totalQuantity -= item.quantity
            state.totalPrice -= item.price
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer