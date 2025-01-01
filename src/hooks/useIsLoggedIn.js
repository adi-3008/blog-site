import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import authService from "../appwrite/authService";
import { login, logout } from "../features/slice/authSlice";

export const useIsLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        authService.getCurrentUser()
        .then((userData) => {
            console.log(userData);
            if(userData){
                dispatch(login({userData}))
                setIsLoggedIn(true);
            }else{
                    dispatch(logout())
                    setIsLoggedIn(false);
                }
            })
            .finally(() => setIsLoggedIn(true))
    }, [])

    return isLoggedIn;
}