import React from 'react';

interface MainContext {
    token: string;
    setToken: (reply: string) => void;
}

const mainContext = React.createContext<MainContext>({
    token: '',
    setToken: () => {}
});

export default mainContext;
