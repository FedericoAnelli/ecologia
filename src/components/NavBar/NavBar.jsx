import CartWidget from '../CartWidget/CartWidget';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './NavBar.css';
import companyLogo from '../assets/environmentalism.webp';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const NavBar = () => {

    const auth = getAuth();
    const navigate = useNavigate();
    const valueToShare = useContext(UserContext);
    const { user } = useContext(UserContext);
    const MySwal = withReactContent(Swal)

    const handleLogin = () => {
      // Dispara pop up de login
      
        MySwal.fire({
            title: '<p class="titleAlert">Iniciar Sesión</p>',
            html:  '<div><p class="inputTexts">Email</p>' +
            '<input id="emailInput" class="inputField" type="email" placeholder="Ingresar mail">' +
            '<p class="inputTexts">Password</p>' +
            '<input id="passwordInput" class="inputField" type="password" placeholder="Ingresar contraseña">' +
            '</div>',
            showCancelButton: true,
            confirmButtonText: '<p class="inputTexts">Enviar</p>',
            showDenyButton: true,
            denyButtonText: '<p class="inputTexts">Registrarse</p>',
            showLoaderOnConfirm: true,
            focusConfirm: false,
            didOpen: () =>  { 
                const emailInput = MySwal.getHtmlContainer().querySelector('#emailInput')
                const passwordInput = MySwal.getHtmlContainer().querySelector('#passwordInput')
                
                const buttonConfirm = MySwal.getConfirmButton()
                buttonConfirm.onclick = () => {

                signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
                  .then((userCredential) => {
                      // Signed in 
                      const user = userCredential.user;
                      valueToShare.setUserData(user);
                      navigate('/');
                      MySwal.close()
                  }
                  )
                  .catch((error) => {
                    MySwal.fire({
                      title: '<p class="titleAlert">Error</p>',
                      html: '<div><p class="inputTexts">'+ error.message +'</p></div>',
                      showCancelButton: true,
                      confirmButtonText: '<p class="inputTexts">Aceptar</p>',
                      showLoaderOnConfirm: true,
                      focusConfirm: false,
                      icon: 'error',
                      preConfirm: () => { 
                        handleLogin(); 
                      }
                    })
                  }
                  )
              }        
          }}).then((result) => {
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
                    <li><Link to="/category/all"><img className="logoClass" src={companyLogo}></img></Link></li>
                    <li>{ localStorage.getItem('user') !== null ? (<p>{user.email}</p>) : (<p onClick={handleLogin}>Login</p>)}</li>
                    <li><CartWidget /></li>
            </ul>

            <ul className="bottomMenu">
            <li><Link className='bottomLink' to="/category/all">Mostrar todos</Link></li>
            <li><Link className='bottomLink' to="/category/water">Agua</Link></li>
            <li><Link className='bottomLink' to="/category/animals">Animales</Link></li>
            <li><Link className='bottomLink' to="/category/forest">Forestación</Link></li>
            </ul>
            
        </div>
    );

} 

export default NavBar;