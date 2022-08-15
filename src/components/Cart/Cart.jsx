import "./Cart.css"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart () {
    const valueToShare = useContext(CartContext)
    const navigate = useNavigate();

    function listCartItems(cart){

        const array = [];
        for (let i = 0; i < cart.length; i++) {
           const cursorPointer = {cursor: 'pointer'};
           let costo = valueToShare.cart[i].quantity * valueToShare.cart[i].donacion;
           let divStyle = {  backgroundImage: 'url(' + cart[i].coverImage + ')', width: '20%', height: '20%', objectFit: 'contain' };
           array.push( 
            <img className="imageStyle" src={cart[i].coverImage}></img>)
           array.push(
            <p>{cart[i].name}</p> )
           array.push(
            <div>{cart[i].quantity}</div> )
           array.push(
            <div>$ {costo}</div> )
            array.push(
            <div style={cursorPointer} onClick={()=> {valueToShare.removeFromCart(cart[i])}}>X</div> )
        }
        return array;
    }

    function returnTotal(){
        let total = 0;
        for (let i = 0; i < valueToShare.cart.length; i++) {
            total += valueToShare.cart[i].quantity * valueToShare.cart[i].donacion;
        }

        return total;
    }

    function navigateToHome(){
        navigate('/')
    }

    if (valueToShare.quantityInCart === 0){
        const cursorPointer = {cursor: 'pointer'};
        return <p>No hay items. Click <strong style={cursorPointer} onClick={navigateToHome}>ACA</strong> para volver.</p>
    }

    return (
        <div className="generalView">
            <div className="itemsGrid">
                <p>Imagen</p>
                <p>Artículo</p>
                <p>Cantidad</p>
                <p>Precio</p>
                <p>Eliminar</p>
                {listCartItems(valueToShare.cart)}
            </div>
            <div>
                <p>Total: ${returnTotal()}</p>
            </div>
        </div>
    );

}

export default Cart;