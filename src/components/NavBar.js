import './NavBar.css';
import companyLogo from './assets/environmentalism.webp';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        
        <div className="contenedorNavBar">
        
            <ul className="topMenu">
                    <li>Descubrir</li>
                    <li>Empieza un proyecto</li>
                    <li><img className="logoClass" src={companyLogo}></img></li>
                    <li> <input className="inputStyling" type="text" placeholder='Búsqueda'></input></li>
                    <li><CartWidget /></li>
            </ul>


            <ul className="bottomMenu">
                    <li><a className='bottomLink'>Agua</a></li>
                    <li><a className='bottomLink'>Animales</a></li>
                    <li><a className='bottomLink'>Sustentabilidad</a></li>
                    <li><a className='bottomLink'>Forestación</a></li>
            </ul>

        </div>

    );

} 

export default NavBar;