import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer';
import './ItemListContainer.css';
import proyectos from '../assets/initialConfig.json';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [listaProyectos, setProyectos] = useState([]);
    const [mensajeError, setMensajeError] = useState(false);
    
    const data = new Promise((resolve, reject) => {

        let condition = true;
        setTimeout(() => {
            if(condition){
                resolve(proyectos)
            }else{
                reject(mensajeError)
            }
        }, 1000);
    })

    useEffect(() => {
        data
            .then((response)=> setProyectos(response))
            .catch((error)=> setMensajeError("Error. No cargo la data."))
            console.log(listaProyectos)
    }, []);

    return (
        <div className='flexContainer'>
        <ItemList listaProyectos={listaProyectos} />
        </div>
    );
} 

export default ItemListContainer;