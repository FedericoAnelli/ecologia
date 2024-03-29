import './ItemCount.css';
import { useEffect, useState } from "react";

function ItemCount ({availableStock, initialStock, onAdd, buttonName}) {

    const [count, setCount] = useState(initialStock);
    // Remueve uno
    const addOne = () => {
        if(count < availableStock){
            setCount(count+1);
        }
    }

    // Suma uno
    const substractOne = () => {
        if (count > initialStock){
            setCount(count-1);
        }
    }

    return (
        <div className='counterContainer'>
            <div className='counterBorder'>
                <button className='countButton' type='button' onClick={substractOne}>-</button>
                <input className='countInput' type="number" value={count} readOnly></input>
                <button className='countButton' type='button' onClick={addOne}>+</button>
            </div>
            <div>
                <button className='addButton' type='button' onClick={()=>onAdd(count)}> {buttonName} </button>
            </div>
        </div>
    );

} 

export default ItemCount;