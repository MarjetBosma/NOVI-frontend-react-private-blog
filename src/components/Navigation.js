import React from 'react';
import './Navigation.css'
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4>De Beste Blogpagina</h4>

                <ul className="navbar-list">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive === true ? 'active-link' : 'default-link'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogposts" className={({ isActive }) => isActive === true ? 'active-link' : 'default-link'}>
                            Blog overzicht
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={({ isActive }) => isActive === true ? 'active-link' : 'default-link'}>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;