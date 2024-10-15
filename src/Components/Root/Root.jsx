import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto mt-[50px]'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;