import './NavBar.css';
const NavBar = () => {
    return (
        
        <div className="contenedorNavBar">
        
            <ul className="topMenu">
                    <li>Descubrir</li>
                    <li>Empieza un proyecto</li>
                    <li>LOGO</li>
                    <li>Búsqueda</li>
                    <li>Iniciar Sesión</li>
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