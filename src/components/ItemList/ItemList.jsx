import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

// Listado de Proyectos
const ItemList = ({projects}) => {
    return(
        <div className="gridList">
        {projects.map((projects)=> 
            <Item 
                key={projects.id} 
                project={projects}
            />)}
        </div>
    )
}

export default ItemList