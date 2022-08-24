import { createContext, useState } from "react";

export const CartContext = createContext({})

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(getInitialState())

    // Inicializa con carrito desde localStorage
    function getInitialState() {
        return JSON.parse(localStorage.getItem('cart')) || []
    }

    // Vacía el carrito
    const cleanCart = () => {
        setCart([])
        localStorage.setItem('cart', JSON.stringify([]))
    }

    // Setea el carrito
    const setCartItem = (item) => {
        setCart(item);
        localStorage.setItem("cart", JSON.stringify(item))
    }

    // Agrega item y cantidad al carrito
    const addToCart = (item, quantity) => {
        // Agrega item con carrito vacio
        if (cart.length === 0) {
            const itemToAdd = {
                ...item,
                quantity: quantity
            }
            setCartItem([itemToAdd])
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
            setCartItem(updatedCart)
        }
        else{
        // Agrega item nuevo
            const itemToAdd = {
                ...item,
                quantity: quantity
            }
            const updatedCart = [...cart, itemToAdd]
            setCartItem(updatedCart)
        }
    }

    // Remueve item del carrito
    function removeFromCart(itemToRemove){
        const itemToRemoveIndex = cart.findIndex((itemInCart) => itemInCart.id === itemToRemove.id)
        const updatedCart = [...cart]
        updatedCart.splice(itemToRemoveIndex, 1)
        setCartItem(updatedCart)
    }

    // Devuelve cantidad de items en el carrito
    const quantityInCart = cart.reduce((previous, item) => previous + item.quantity, 0)

    // Valores a compartir del context
    const valueToShare = {
        cart, cleanCart, addToCart, removeFromCart, quantityInCart
    }

    return(
        <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
    )
}

export default CartProvider;
