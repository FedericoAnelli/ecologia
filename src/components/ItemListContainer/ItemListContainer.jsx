import './ItemListContainer';
import './ItemListContainer.css';
import getProjects from '../assets/initialConfig.json';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [projects, setProjects] = useState([]);
    const [errorMsg, setErrorMsg] = useState(false);

    const data = new Promise((resolve, reject) => {
        
        let condition = true;
        setTimeout(() => {
            if(condition){
                resolve(getProjects)
            }else{
                reject(errorMsg)
            }
        }, 2000);
    })

    useEffect(() => {
        data
            .then((response)=> setProjects(response))
            .catch((error)=> setErrorMsg("Error. No cargo la data."))
    });

    return (
        <div className='flexContainer'>
            {projects.length != 0 ? (
        <ItemList projects={projects} />
        ) : (<h1>Loading...</h1>)}
        </div>
    );
} 

export default ItemListContainer;