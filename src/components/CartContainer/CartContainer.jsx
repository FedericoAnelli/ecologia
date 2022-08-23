import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import "./CartContainer.css";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const USER_DEMO = {
    name: "fede",
    phone: "1159704798",
    email: "federicoanelli@gmail.com"
}



const CartContainer = () => {
    const valueToShare = useContext(CartContext)
    const { cart } = useContext(CartContext);
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
                    html: '<p>Su pedido ha sido enviado.<br> Número de órden: ' + id+ '</p>',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                valueToShare.cleanCart();
            })
    }


    
    const handleSendOrder = () => {
        Swal.fire({
            html: 
            '<input id="swal-input1" class="swal2-input" placeholder="Ingresar nombre">' +
            '<input id="swal-input2" class="swal2-input" placeholder="Ingresar teléfono">' +
            '<input id="swal-input3" class="swal2-input" placeholder="Ingresar mail">',
            showCancelButton: true,
            confirmButtonText: 'Enviar',
            showLoaderOnConfirm: true,
            focusConfirm: false,
            preConfirm: () => {
              sendOrder(document.getElementById('swal-input1').value, document.getElementById('swal-input2').value, document.getElementById('swal-input3').value)
            }
          })
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

/* 

        <Container className='cartContainer'>
            <Cart items={cart} onDelete={handleDelete}/>
            <p className='totalP'><strong>Total:</strong> ${total}</p>
            <button className='finalizeButton' onClick={sendOrder}>Finalizar compra</button>
        </Container>

*/