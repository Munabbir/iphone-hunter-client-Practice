import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2>My Iphone Huntar</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;