import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
            <nav>
                <Link to='/login'>Login</Link>
                <Link to='/registrar'>Registrar</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;