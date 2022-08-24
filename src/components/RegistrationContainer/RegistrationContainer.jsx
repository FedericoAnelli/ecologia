import "./RegistrationContainer.css";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegistrationContainer = () => {

    const auth = getAuth();
    const navigate = useNavigate();

    // Genera usuario en Firebase Authentication
    const handleRegistration = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          Swal.fire({
            title: 'Registro exitoso',
            text: 'Bienvenido a Environmentalism',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          navigate('/')
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
        });
    }

    return (
        <div className="registrationForm">
        <h1 className="registrationTitle">Registrarse</h1>
        <p className="inputTitles">Email</p>
        <input id="email" className="inputFields" type="email" placeholder="Ingresar mail"></input>
        <p className="inputTitles">Password</p>
        <input id="password" className="inputFields" type="password" placeholder="Ingresar contraseña"></input>
        <button className="buttonRegistro" onClick={() => {handleRegistration(document.getElementById("email").value, document.getElementById("password").value)}}>Registrarse</button>
        </div>
    );
}

export default RegistrationContainer;