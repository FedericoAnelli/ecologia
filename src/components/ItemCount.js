import './ItemCount.css';
import { useEffect, useState } from "react";

function ItemCount ({stockDisponible, stockInicial, onAdd}) {
    let initial = stockInicial;
    const [contador, setContador] = useState(initial);

    const addOne = () => {
        if(contador < stockDisponible){
            setContador(contador+1);
        }
    }

    const substractOne = () => {
        if (contador > stockInicial){
            setContador(contador-1);
        }
    }

    return (
        <div>
            <div>
                <button className='contadorButton' type='button' onClick={substractOne}>-</button>
                <input className='contadorInput' type="number" value={contador}></input>
                <button className='contadorButton' type='button' onClick={addOne}>+</button>
            </div>
            <div>
                <button className='agregarAlCarritoButton' type='button' onClick={()=>onAdd(contador)}> AGREGAR AL CARRITO </button>
            </div>
        </div>

    );

} 

export default ItemCount;