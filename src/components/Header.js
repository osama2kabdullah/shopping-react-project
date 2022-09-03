import React from 'react';
import '../App.css';
import logo from '../images/Logo.svg'



const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-links'>
                <a href="/home">Shop</a>
                <a href="/home">Order Review</a>
                <a href="/home">Manage Inventory</a>
                <a href="/home">Login</a>
            </div>
        </nav>
    );
};

export default Header;