import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/authService';
import { logout } from '../../features/slice/authSlice';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logoutHandler(){
        authService
            .logout()
            .then(() => {
                dispatch(logout())
                navigate("/login")
            })
    }  

    return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;