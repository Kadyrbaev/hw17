import React from "react"

const CartContext = React.createContext({
    items: [],
    cart: [],
    summa: 0,
    totalAmount: 0,
    addItem: (item)=>{},
    removeItem: (id)=>{},
})
export default CartContext