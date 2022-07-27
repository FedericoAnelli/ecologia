import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

const Item = ({proyecto}) => {

const onAdd = (amount) => {
    console.log(`Se agregaron ${amount} items en el carrito`)
}
// Devuelve card de producto
return(
    <div className="itemContainer">
        <p>{proyecto.name}</p>
        <img className="imgStyling" src={proyecto.coverImage}></img>
        <p className="textoDonacion">Donación: ${proyecto.donacion}</p>
        <ItemCount availableStock={proyecto.stock} initialStock={1} onAdd={onAdd} />
    </div>
)
}

export default Item