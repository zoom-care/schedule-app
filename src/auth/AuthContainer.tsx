import React, { useContext, useEffect, useState } from 'react';
import Login from './Login';
import MainContext from '../core/MainContext';

const AuthContainer: React.FC = ({ children }) => {
    const { token } = useContext(MainContext);
    const [element, setElement] = useState<JSX.Element>(
        <>
            {children}
        </>
    );

    useEffect(() => {

        if (!token) {
            setElement(<Login />);
        } else {
            setElement(<>
                {children}
            </>);
        }

    }, [token, children]);
    return element;
};

export default AuthContainer;