import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import companyLogo from '../assets/environmentalism.webp';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="contenedorNavBar">   

            <ul className="topMenu">
                    <li>Descubrir</li>
                    <li>Empieza un proyecto</li>
                    <li><Link to="/"><img className="logoClass" src={companyLogo}></img></Link></li>
                    <li> <input className="inputStyling" type="text" placeholder="Búsqueda"></input></li>
                    <li><CartWidget /></li>
            </ul>

            <ul className="bottomMenu">
            <li><Link className='bottomLink' to="*">Mostrar todos</Link></li>
            <li><Link className='bottomLink' to="/category/water">Agua</Link></li>
            <li><Link className='bottomLink' to="/category/animals">Animales</Link></li>
            <li><Link className='bottomLink' to="/category/forest">Forestación</Link></li>
            </ul>
            
        </div>

    );

} 

export default NavBar;