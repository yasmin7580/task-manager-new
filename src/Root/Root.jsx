import React from 'react';
import Navbar from '../Components/SharedComponents/Navbar';
import Footer from '../Components/SharedComponents/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='min-h-dvh flex flex-col '>
            <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;