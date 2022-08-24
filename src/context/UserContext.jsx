import { createContext, useState } from "react";

export const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(getInitialUser())

    function getInitialUser() {
        return JSON.parse(localStorage.getItem('user')) || {}
    }

    function setUserData (userData) {
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }
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