import { createContext, useState } from "react";

export const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(getInitialUser())

    // Inicializa con usuario desde localStorage
    function getInitialUser() {
        return JSON.parse(localStorage.getItem('user')) || {}
    }

    // Setea el usuario en la navegacion y localStorage
    function setUserData (userData) {
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }

    // Valores a compartir
    const valueToShare = {
        user, setUserData
    }
    return (
        <UserContext.Provider value={valueToShare}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;