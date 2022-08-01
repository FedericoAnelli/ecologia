import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({project}) => {

const onAdd = (amount) => {
    console.log(`Se agregaron ${amount} items en el carrito`)
}
// Devuelve card de producto
return(
    <Link style={{textDecoration: 'none'}} to={`/project/${project.id}`}>
    <div className="itemContainer">
        <h2>{project.name}</h2>
        <img className="imgStyling" src={project.coverImage}></img>
        <p className="textoDonacion"><strong>Donación:</strong> ${project.donacion}</p>
        <p className="descriptionText">{project.description}</p>
        <div className="divCounter">
        <ItemCount availableStock={project.stock} initialStock={1} onAdd={onAdd} />
        </div>
    </div>
    </Link>
)
}

export default Item