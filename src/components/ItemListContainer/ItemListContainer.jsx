import './ItemListContainer';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';

const ItemListContainer = ({greeting}) => {
    const [projects, setProjects] = useState([]);
    const [errorMsg, setErrorMsg] = useState(false);

    const getProjects = () => {
        fetch("https://raw.githubusercontent.com/FedericoAnelli/ecologia/main/src/components/assets/initialConfig.json")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => setErrorMsg("Error, no se pudieron tomar los datos."));
    }

    useEffect(() => {
        getProjects()
    }, []);

    return (
        <div className='flexContainer'>
            {projects.length != 0 ? (
        <ItemList projects={projects} />
        ) : (<h1>Loading...</h1>)}
        </div>
    );
} 

export default ItemListContainer;