import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import companyLogo from '../assets/environmentalism.webp';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const NavBar = () => {

const auth = getAuth();


    const handleLogin = () => {
        Swal.fire({
            title: '<p class="titleAlert">Iniciar Sesión</p>',
            html:  '<div><p class="inputTexts">Email</p>' +
            '<input id="swal-input3" class="inputField" type="email" placeholder="Ingresar mail">' +
            '<p class="inputTexts">Password</p>' +
            '<input id="swal-input4" class="inputField" type="email" placeholder="Ingresar mail">' +
            '</div>',
            showCancelButton: true,
            confirmButtonText: '<p class="inputTexts">Enviar</p>',
            showLoaderOnConfirm: true,
            focusConfirm: false,
            preConfirm: () => {

                createUserWithEmailAndPassword(auth, document.getElementById('swal-input3').value, document.getElementById('swal-input4').value)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // ..
                });
            }
          })
    }

    return (
        <div className="contenedorNavBar">   

            <ul className="topMenu">
                    <li>Descubrir</li>
                    <li>Empieza un proyecto</li>
                    <li><Link to="/"><img className="logoClass" src={companyLogo}></img></Link></li>
                    <li><p onClick={handleLogin}>Login</p></li>
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