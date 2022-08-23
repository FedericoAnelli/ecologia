import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { CartContext } from "../../context/CartContext";
import { UserContext } from '../../context/UserContext';
import Cart from "../Cart/Cart";
import "./CartContainer.css";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const CartContainer = () => {
    const valueToShare = useContext(CartContext)
    const { cart } = useContext(CartContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    
    const total = cart.reduce((acc, item) => acc + item.donacion * item.quantity, 0)
    const handleDelete = (item) => {valueToShare.removeFromCart(item)};

    const navigateToHome = () => {
        navigate('/')
    }

    const sendOrder = (name, phone, email) => {
        const newOrder = {
            buyer: name,
            phone: phone,
            email: email,
            items: cart,
            total: total 
        }

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, newOrder)
            .then(({id}) => {
                Swal.fire({
                    title: '¡Gracias!',
                    html: '<p>Su pedido ha sido enviado.<br> Número de órden: <strong>' + id+ '</strong></p>',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                valueToShare.cleanCart();
            })
    }

    const handleSendOrder = () => {
        if(user.length === 0){
                Swal.fire({
                    title: '<p class="titleAlert">Datos de la compra</p>',
                    html: '<div><p class="inputTexts">Nombre</p>' +
                    '<input id="swal-input1" class="inputField" type="text" placeholder="Ingresar nombre">' +
                    '<div><p class="inputTexts">Teléfono</p>' +
                    '<input id="swal-input2" class="inputField" type="tel" placeholder="Ingresar teléfono">' +
                    '<div><p class="inputTexts">Email</p>' +
                    '<input id="swal-input3" class="inputField" type="email" placeholder="Ingresar mail"></div>',
                    showCancelButton: true,
                    confirmButtonText: '<p class="inputTexts">Enviar</p>',
                    showLoaderOnConfirm: true,
                    focusConfirm: false,
                    preConfirm: () => {
                    sendOrder(document.getElementById('swal-input1').value, document.getElementById('swal-input2').value, document.getElementById('swal-input3').value)
                    }
          })}
          else
          {
                Swal.fire({
                    title: '<p class="titleAlert">Datos de la compra</p>',
                    html: '<div><p class="inputTexts"> Comprar como: ' + user.email +'</p></div>',
                    showCancelButton: true,
                    confirmButtonText: '<p class="inputTexts">Enviar</p>',
                    showLoaderOnConfirm: true,
                    focusConfirm: false,
                    preConfirm: () => {
                    sendOrder(user.email, "defaultNumber", "defaultNumber")
                    }
                });     
          }
    }

    return (
        <Container className="cartContainer">

        { cart.length !== 0 ? (   
            <div className="cartContainer">        
            <Cart items={cart} onDelete={handleDelete}/>
            <p className='totalP'><strong>Total:</strong> ${total}</p>
            <button className='finalizeButton' onClick={handleSendOrder}>Finalizar compra</button>
            </div> 
        ) : (<div className="cartContainer"><p>El carrito está vacío. Click <strong onClick={navigateToHome}>ACÁ</strong> para volver.</p></div>)}

        </Container>

    )

}

export default CartContainer;
