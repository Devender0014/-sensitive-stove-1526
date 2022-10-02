import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { loginObj } from "./utils";

export const LoginContextProvider = createContext();


export const LoginContext = ({ children }) => {
    const [reloadState, setReloadState] = useState(false);
    const [userCred, setUserCred] = useState(() => JSON.parse(localStorage.getItem('cred')) || loginObj)

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('cred')) || loginObj
        if (userData.email && userData.password) {
            setUserCred(userData)
        }
    }, [reloadState])
    return <LoginContextProvider.Provider value={{ setReloadState, userCred, setUserCred }}>{children}</LoginContextProvider.Provider>
}