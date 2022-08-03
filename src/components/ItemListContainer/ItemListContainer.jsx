import Loader from '../Loaders/Loader';
import './ItemListContainer';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProjects from '../Services/DataRetrieve';

const ItemListContainer = ({greeting}) => {
    const [projects, setProjects] = useState([]);
    const { category } = useParams();    

    useEffect(() => {
        getProjects
            .then((response) => {
                if (category) {
                    setProjects(
                        response.filter((project) => project.category === category)
                        );
                } else {
                    setProjects(response);
                }
            })
            .catch((error) => console.log("No se pudieron cargar los datos.", error));
    }, [category]);

    return (
        <div className='flexContainer'>
            {projects.length != 0 ? (
                <ItemList projects={projects} />
        ) : (
                <Loader />
            )}
        </div>
    );

} 

export default ItemListContainer;