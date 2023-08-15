import React from 'react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className='home__container'>
            <h2>Home</h2>
            <NavLink to="/appointments" > Go to appointments screen. </NavLink>
        </div>
    );
};

export default Home;