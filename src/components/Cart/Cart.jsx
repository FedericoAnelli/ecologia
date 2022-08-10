import './Cart.css'
import cartWidget from '../assets/cartWidget.webp'

function Cart ({amountInCart}) {    
    return (
        <div className='containerStyle'>
            <p className='amountInCartStyle'>{amountInCart}</p>
            <img className="cartWidgetStyle" src={cartWidget}></img>
        </div>
    );

}

export default Cart;