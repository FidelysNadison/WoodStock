import React from 'react';
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <div className='navigation' >
            <ul>
                <NavLink to="/About">
                    <li>about</li>
                </NavLink>
                <NavLink to="/Furnitures">
                    <li>Furnitures</li>
                </NavLink>
                <NavLink to="/Shop">
                    <li>Shop</li>
                </NavLink>
                <NavLink to="/Contact">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;