import React from 'react';
import logo from './logo.svg';
import MarginHelper from '../shared/utilities/MarginHelper';

const Logo: React.FC = () => {
    return (
        <div className={`logo ${MarginHelper.GetMargin({left: 'md'})}`}>
            <img src={logo} alt="Logo" />
        </div>
    );
};

export default Logo;
