import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({listaProyectos}) => {
    return(
        <div className="gridList">
        {listaProyectos.map((proyecto)=> <Item key={proyecto.id} proyecto={proyecto}/>)}
        </div>
    )
}

export default ItemList