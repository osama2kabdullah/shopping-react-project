import React from 'react';
import logo from '../../images/Logo.svg'
import CustomLink from '../../utilities/CustomLink';
import '../../App.css'



const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-links'>
                <CustomLink to="/">Shop</CustomLink>
                <CustomLink to="/order">Order Review</CustomLink>
                <CustomLink to="/inventory">Manage Inventory</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
            </div>
        </nav>
    );
};

export default Header;