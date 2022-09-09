import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../images/Logo.svg'



const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-links'>
                <Link to="/">Shop</Link>
                <Link to="/order">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;