import React from 'react';
import HeadBar from './HeadBar';
import MainRoutes from '../core/MainRoutes';
import FootBar from './FootBar';
import { BrowserRouter } from 'react-router-dom';
import MarginHelper from '../shared/utilities/MarginHelper';

const Layout: React.FC = ( { children }) => {
    return (
        <BrowserRouter >
            <div className='layout layout__container'>
                <div className={`layout layout__head-bar ${MarginHelper.GetMarginAll('md')}`}>
                    <HeadBar></HeadBar>
                </div>
                <div className='layout layout__main-routes'>
                    { children }
                </div>
                <div className='layout layout_bottom-bar'>
                    <FootBar></FootBar>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Layout;
