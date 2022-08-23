import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import "./CartContainer.css";

const USER_DEMO = {
    name: "fede",
    phone: "1159704798",
    email: "federicoanelli@gmail.com"
}



const CartContainer = () => {
    const valueToShare = useContext(CartContext)
    const { cart } = useContext(CartContext);
    const total = cart.reduce((acc, item) => acc + item.donacion * item.quantity, 0)
    const handleDelete = (item) => {valueToShare.removeFromCart(item)};

    const sendOrder = () => {
        const newOrder = {
            buyer: USER_DEMO,
            items: cart,
            total: total 
        }

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, newOrder)
            .then(({id}) => {
                console.log('order added', id);
            })
    }

    return (

        <Container className='cartContainer'>
            <Cart items={cart} onDelete={handleDelete}/>
            <p className='totalP'><strong>Total:</strong> ${total}</p>
            <button className='finalizeButton' onClick={sendOrder}>Finalizar compra</button>
        </Container>


    )

}

export default CartContainer;

