import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { CartContext } from "../../context/CartContext";
import { UserContext } from '../../context/UserContext';
import Cart from "../Cart/Cart";
import "./CartContainer.css";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const CartContainer = () => {
    const MySwal = withReactContent(Swal)
    const valueToShare = useContext(CartContext)
    const { cart } = useContext(CartContext);
    const { user } = useContext(UserContext);
    const [input, setInput] = useState([]);
    const navigate = useNavigate();
    
    const total = cart.reduce((acc, item) => acc + item.donacion * item.quantity, 0)
    const handleDelete = (item) => {valueToShare.removeFromCart(item)};

    const navigateToHome = () => {
        navigate('/')
    }

    const handleInput = (a, b, c) => {
        setInput({ [a.id]: a.value, [b.id]: b.value, [c.id]: c.value })
    }

    const fireError = (error) => {
        MySwal.fire({
            title: <p>¡Ups!</p>,
            text: error,
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }

    // Envia la orden de compra a Firebase
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
                // Envia pop up de confirmacion
                Swal.fire({
                    title: '¡Gracias!',
                    html: '<p>Su pedido ha sido enviado.<br> Número de órden: <strong>' + id+ '</strong></p>',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                valueToShare.cleanCart();
            })
    }

    // Valida si email es correcto
    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleSendOrder = () => {
        if(!localStorage.getItem('user')){
           // Si el usuario no está loggeado, ofrece completar los datos para finalizar compra
            MySwal.fire({
                title: '<p class="titleAlert">Datos de la compra</p>',
                html: '<div><p class="inputTexts">Nombre</p>' +
                    '<input id="nameInput" class="inputField" type="text" placeholder="Ingresar nombre">' +
                    '<div><p class="inputTexts">Teléfono</p>' +
                    '<input id="phoneInput" class="inputField" type="tel" placeholder="Ingresar teléfono">' +
                    '<div><p class="inputTexts">Email</p>' +
                    '<input id="mailInput" class="inputField" type="email" placeholder="Ingresar mail"></div>',
                    showCancelButton: true,
                    confirmButtonText: '<p class="inputTexts">Enviar</p>',
                    focusConfirm: false,
                    didOpen: () => {
                        const nameInput = MySwal.getHtmlContainer().querySelector('#nameInput')
                        const phoneInput = MySwal.getHtmlContainer().querySelector('#phoneInput')
                        const mailInput = MySwal.getHtmlContainer().querySelector('#mailInput')
                        const buttonSend = MySwal.getConfirmButton()

                        buttonSend.onclick = () => {
                            if (nameInput.value === '') {
                                fireError('Debe ingresar un nombre')
                            } else if (phoneInput.value === '' || isNaN(phoneInput.value)) {
                                fireError('Debe ingresar un teléfono válido')
                            } else if (mailInput.value === '' || !validateEmail(mailInput.value)) {
                                fireError('Debe ingresar un email válido')
                            } else {
                            sendOrder(nameInput.value, phoneInput.value, mailInput.value)
                            MySwal.close()
                            }
                        }

                },
          })}
          else
          {
            // Si el usuario está loggeado, finaliza la compra con los datos existentes
                MySwal.fire({
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
        ) : (<div className="cartContainer"><p>El carrito está vacío. Click <strong className='acaClick' onClick={navigateToHome}>ACÁ</strong> para volver.</p></div>)}

        </Container>

    )

}

export default CartContainer;
