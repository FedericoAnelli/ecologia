import CartWidget from '../CartWidget/CartWidget';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './NavBar.css';
import companyLogo from '../assets/environmentalism.webp';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const NavBar = () => {

    const auth = getAuth();
    const navigate = useNavigate();
    const valueToShare = useContext(UserContext);
    const { user } = useContext(UserContext);

    const handleLogin = () => {
        Swal.fire({
            title: '<p class="titleAlert">Iniciar Sesión</p>',
            html:  '<div><p class="inputTexts">Email</p>' +
            '<input id="swal-input3" class="inputField" type="email" placeholder="Ingresar mail">' +
            '<p class="inputTexts">Password</p>' +
            '<input id="swal-input4" class="inputField" type="password" placeholder="Ingresar contraseña">' +
            '</div>',
            showCancelButton: true,
            confirmButtonText: '<p class="inputTexts">Enviar</p>',
            showDenyButton: true,
            denyButtonText: '<p class="inputTexts">Registrarse</p>',
            showLoaderOnConfirm: true,
            focusConfirm: false,
            preConfirm: () => {
                signInWithEmailAndPassword(auth, document.getElementById('swal-input3').value, document.getElementById('swal-input4').value)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  valueToShare.setUserData(user)
                  // ...
                })
                .catch((error) => { 
                  Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })  
                  // ..
                })
            }
          }).then((result) => {
            if(result.isDenied){
                navigate('/register')
            }
          })
    }

    return (
        <div className="contenedorNavBar">   

            <ul className="topMenu">
                    <li>Descubrir</li>
                    <li>Empieza un proyecto</li>
                    <li><Link to="/"><img className="logoClass" src={companyLogo}></img></Link></li>
                    <li>{ user.length !== 0 ? (<p>{user.email}</p>) : (<p onClick={handleLogin}>Login</p>)}</li>
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