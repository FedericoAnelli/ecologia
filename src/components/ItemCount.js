import './ItemCount.css';
import { useEffect, useState } from "react";

function ItemCount ({stockDisponible, stockInicial, onAdd}) {
    let initial = parseInt(stockInicial);
    const [name, setName] = useState(initial);

    const addOne = () => {
        if(name < parseInt(stockDisponible)){
            setName(name+1);
        }
    }

    const substractOne = () => {
        if (name > parseInt(stockInicial)){
            setName(name-1);
        }
    }

    return (
        
        <div>
            <button className='contadorButton' type='button' onClick={substractOne}>-</button>
            <input className='contadorInput' type="number" value={name}></input>
            <button className='contadorButton' type='button' onClick={addOne}>+</button>
        </div>

    );

} 

export default ItemCount;