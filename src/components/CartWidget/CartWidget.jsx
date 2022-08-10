import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import cartWidget from '../assets/cartWidget.webp'

// Muestra el widget de carrito
const CartWidget = () => {
    const valueToShare = useContext(CartContext)
    return (
        <Cart  amountInCart={valueToShare.quantityInCart} />
    );
} 

export default CartWidget;