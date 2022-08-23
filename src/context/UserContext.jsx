import { createContext, useState } from "react";

export const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const [user, setUser] = useState([])

    function setUserData (userData) {
        setUser(userData)
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