import Table from 'react-bootstrap/Table'
import "./Cart.css"

const Cart = ({items, onDelete}) => (
    <Table striped bordered hover>  
        <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
                <th className='alignColumnCenter'>Eliminar</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.donacion}</td>
                    <td>${item.donacion * item.quantity}</td>
                    <td className='alignX' onClick={() => onDelete(item)}>X</td>
                </tr>
            ))}
        </tbody>
    </Table>
)

export default Cart;