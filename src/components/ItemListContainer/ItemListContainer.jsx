import Loader from '../Loaders/Loader';
import './ItemListContainer';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProjects from '../Services/DataRetrieve';
import { collection, getDocs, getFirestore} from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
    const [projects, setProjects] = useState([]);  

    useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'items')
      
      getDocs(itemsCollection)
        .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setProjects(data)
        })
        .catch((error) => console.log(error))
    }, [])
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