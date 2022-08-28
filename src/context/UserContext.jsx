import { createContext, useState } from "react";

export const UserContext = createContext({})

const UserProvider = ({ children }) => {
    // Inicializa con usuario desde localStorage
    const getInitialUser = () => JSON.parse(localStorage.getItem('user')) || []
    
    const [user, setUser] = useState(getInitialUser())

    // Setea el usuario en la navegacion y localStorage
    const setUserData = (userData) =>{
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