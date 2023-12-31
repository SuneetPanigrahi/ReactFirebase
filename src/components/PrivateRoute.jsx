import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {
let {user}=useAuthContext();
if(!user){
    return <Navigate to={"/"}/>
}
return children;
}

export default PrivateRoute