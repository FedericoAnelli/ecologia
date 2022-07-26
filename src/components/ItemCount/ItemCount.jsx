import './ItemCount.css';
import { useEffect, useState } from "react";

function ItemCount ({availableStock, initialStock, onAdd}) {
    const [count, setCount] = useState(initialStock);
    const addOne = () => {
        if(count < availableStock){
            setCount(count+1);
        }
    }

    const substractOne = () => {
        if (count > initialStock){
            setCount(count-1);
        }
    }

    return (
        <div>
            <div>
                <button className='countButton' type='button' onClick={substractOne}>-</button>
                <input className='countInput' type="number" value={count}></input>
                <button className='countButton' type='button' onClick={addOne}>+</button>
            </div>
            <div>
                <button className='addButton' type='button' onClick={()=>onAdd(count)}> AGREGAR AL CARRITO </button>
            </div>
        </div>

    );

} 

export default ItemCount;