import ItemCount from './ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
        <h1>{greeting}</h1>
        <ItemCount stockDisponible='5' stockInicial='1' onAdd='0' />
        </div>
    );

} 

export default ItemListContainer;