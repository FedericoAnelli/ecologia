import './ItemListContainer';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const [projects, setProjects] = useState([]);
    const [errorMsg, setErrorMsg] = useState(false);
    const { category } = useParams();    

    const getProjects = new Promise((resolve) => {
        setTimeout(() => {
        fetch("https://raw.githubusercontent.com/FedericoAnelli/ecologia/main/src/components/assets/initialConfig.json")
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => setErrorMsg("Error, no se pudieron tomar los datos."));
        }, 1000);
    });

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
            .catch((error) => setErrorMsg("Error, no se pudieron tomar los datos." + error));
    }, [category]);

    return (
        <div className='flexContainer'>
            {projects.length != 0 ? (
                <ItemList projects={projects} />
        ) : (
                <div id="cssload-pgloading">
                <div class="cssload-loadingwrap">
                    <ul class="cssload-bokeh">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            )}
        </div>
    );
} 

export default ItemListContainer;