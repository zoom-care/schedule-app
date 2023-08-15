import React from 'react';
import NavBar from './NavBar';
import UserButton from './UserButton';
import Logo from './Logo';

const HeadBar: React.FC = () => {
    return (
        <>
            <Logo></Logo>
            <NavBar></NavBar>
            <UserButton></UserButton>
        </>
    );
};

export default HeadBar;
