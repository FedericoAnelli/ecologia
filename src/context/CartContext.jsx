import { createContext, useState } from "react";

export const CartContext = createContext({})

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const isInCart = () => {}

    const cleanCart = () => {
        setCart([])
    }

    const addToCart = (item, quantity) => {
        // Agrega item con carrito vacio
        if (cart.length === 0) {
            const itemToAdd = {
                ...item,
                quantity: quantity
            }
            setCart([itemToAdd])
        return
        }

        // Agrega item duplicado
        const itemDuplicatesIndex = cart.findIndex((itemInCart) => itemInCart.id === item.id)
        if (itemDuplicatesIndex >= 0) {
            const itemToUpdate = {
                ...item,
                quantity: cart[itemDuplicatesIndex].quantity + quantity
            }
            const updatedCart = [...cart]
            updatedCart[itemDuplicatesIndex] = itemToUpdate
            setCart(updatedCart)
        }
        else{
        // Agrega item nuevo
            const itemToAdd = {
                ...item,
                quantity: quantity
            }
            const updatedCart = [...cart, itemToAdd]
            setCart(updatedCart)
        }
    }

    function removeFromCart(itemToRemove){
        const itemToRemoveIndex = cart.findIndex((itemInCart) => itemInCart.id === itemToRemove.id)
        const updatedCart = [...cart]
        updatedCart.splice(itemToRemoveIndex, 1)
        setCart(updatedCart)
    }

    const quantityInCart = cart.reduce((previous, item) => previous + item.quantity, 0)

    const valueToShare = {
        cart, isInCart, cleanCart, addToCart, removeFromCart, quantityInCart
    }

    return(
        <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
    )
}

export default CartProvider;
