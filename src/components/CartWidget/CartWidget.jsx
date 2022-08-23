import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import cartWidget from '../assets/cartWidget.webp'
import { useNavigate } from 'react-router-dom';
import './CartWidget.css'

// Muestra el widget de carrito
const CartWidget = () => {
    const valueToShare = useContext(CartContext)
    const navigate = useNavigate();
    
    const navigateToCart = () => {
            navigate('/cart')
    }

    return (
        <div className='containerStyle' onClick={navigateToCart}>
            <p className='amountInCartStyle'>{valueToShare.quantityInCart}</p>
            <img className="cartWidgetStyle" src={cartWidget}></img>
        </div>
    );
} 

export default CartWidget;