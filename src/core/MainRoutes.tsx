import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Appointments from '../containers/appointments';
import Home from '../containers/home';

const MainRoutes: React.FC = () => {
    return (
        <Routes>
           <Route path='/home' element={<Home></Home>}></Route>
           <Route path='/appointments' element={<Appointments></Appointments>}></Route>
           <Route path='/*' element={<Navigate to='/home' replace></Navigate> }></Route>
        </Routes>
    );
};

export default MainRoutes;
