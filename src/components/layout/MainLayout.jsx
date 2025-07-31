import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer';

const MainLayout = () => {


    return (
        <div className='space-y-10'>
            <Navbar  ></Navbar>
            <div className='w-11/12 mx-auto '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;