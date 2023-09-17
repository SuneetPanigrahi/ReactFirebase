import React from 'react'
import {Routes,Route} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
        <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>} ></Route>
    </Routes>
  )
}

export default AllRoutes