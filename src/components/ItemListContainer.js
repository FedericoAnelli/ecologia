import ItemCount from './ItemCount';
import './ItemListContainer.css';

const onAdd = (cantidad) => {
    console.log(`Se agregaron ${cantidad} items en el carrito`)
}

const ItemListContainer = ({greeting}) => {
    return (
        <div>
        <h1>{greeting}</h1>
        <ItemCount availableStock={5} initialStock={1} onAdd={onAdd} />
        </div>
    );
} 

export default ItemListContainer;