import { createContext, useState } from "react";

export const CartContext = createContext({})

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const isInCart = () => {}

    const cleanCart = () => {
        setCart([])
    }

    const addToCart = (item, quantity) => {
        setCart([...cart, { item, quantity }])
    }

    const removeFromCart = () => {}

    const valueToShare = {
        cart, isInCart, cleanCart, addToCart, removeFromCart, quantityInCart: cart.length
    }

    return(
        <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
    )
}

export default CartProvider;