import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Protected({children, authentication=true}) {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);
    console.log();
    useEffect(() => {
        if(authStatus !== authentication){
            if(authentication){
                console.log("navigating to login")
                navigate("/login")
            }
            else {
                console.log("no navigation")
                // navigate("/")
            }
        }
        setLoader(false);
    }, [authStatus, navigate, authentication]);

    return ( loader ? <>...Loading</> : <>{children}</> 
    );
}

export default Protected;