import './CartWidget.css'
import cartWidget from '../assets/cartWidget.webp';

// Muestra el widget de carrito
const CartWidget = () => {
    return (
        
        <img className="cartWidgetStyle" src={cartWidget}></img>

    );

} 

export default CartWidget;