import React, { useState } from 'react';
import '../styles/global.scss';
import Layout from '../layout';
import AuthContainer from '../auth/AuthContainer';
import MainContext from '../core/MainContext';
import { ToastContainer } from 'react-toastify';
import WithAxios from '../core/WithAxios';
import MainRoutes from '../core/MainRoutes';

function App() {
  const [token, setToken] = useState<string>('');

  return (
    <div className="App">
      <MainContext.Provider value={{ token, setToken }}>
        <WithAxios>
          <AuthContainer>
            <Layout>
              <MainRoutes></MainRoutes>
            </Layout>
          </AuthContainer>
        </WithAxios>
        <ToastContainer 
          position="top-right"
          draggable={false}
          pauseOnHover
          theme="light"
        />
      </MainContext.Provider>
    </div>
  );
}

export default App;
