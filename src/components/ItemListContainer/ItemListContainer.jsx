import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer';
import './ItemListContainer.css';
import proyectos from '../assets/initialConfig.json';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({category}) => {
    const [listaProyectos, setProyectos] = useState([]);
    const [mensajeError, setMensajeError] = useState(false);
    const URL_initialConfig = '../assets/initialConfig.json';

    const data = new Promise((resolve, reject) => {
        
        const URL_initialConfig = '../assets/initialConfig.json';
        let condition = true;
        setTimeout(() => {
            if(condition){
                resolve(proyectos)
            }else{
                reject(mensajeError)
            }
        }, 2000);
    })

/*

        fetch(URL_initialConfig)
            .then((response) => response.json())
            .then((data) => setItem(data.filter(item => item.id == parseInt(id))[0]))
            .catch(error => console.log(error));
 

*/


    useEffect(() => {
        data
            .then((response)=> setProyectos(response))
            .catch((error)=> setMensajeError("Error. No cargo la data."))
    });

    return (
        <div className='flexContainer'>
            {listaProyectos.length != 0 ? (
        <ItemList listaProyectos={listaProyectos} />
        ) : (<h1>Loading...</h1>)}
        </div>
    );
} 

export default ItemListContainer;