import React, { useContext } from 'react';
import MainContext from '../core/MainContext';

const UserButton: React.FC = () => {
    const { setToken } = useContext(MainContext);
    var onClick = () => {
        setToken('');
    };

    return (
        <div className='user-button__container' onClick={onClick}>
            <div className='user_button__text'>Sign Out</div>
        </div>
    );
};

export default UserButton;
