import React from 'react';
import './Navigation.css'
import { NavLink, useNavigate } from 'react-router-dom';

function Navigation({ isAuth, toggleAuth }) {
    const navigate = useNavigate();

    function Logout() {
        toggleAuth(false);
        navigate('/')  // Terug naar Home na uitloggen
    }

    return (
        <nav>
            <div className="nav-container">
                <h4>De Beste Blogpagina</h4>

                <ul className="navbar-list">
                    <li>
                        <NavLink to="/"
                                 className={({ isActive }) => isActive === true ? 'active-link' : 'default-link'}>
                            Home
                        </NavLink>
                    </li>

                    {/* Als de gebruiker is ingelogd (isAuth === true), de menu-items blog overzicht en uitloggen zien. Als de gebruiker niet ingelogd is, alleen het menu-item login laten zien. Home is altijd zichtbaar. */}
                    {isAuth === true
                      ? <>
                            <li>
                                <NavLink to="/blogposts"
                                         className={({ isActive }) => isActive === true ? 'active-link' : 'default-link'}>
                                    {/*isActive zorgt ervoor dat het navbar-item van de pagina waar de gebruiker op dat moment is, een andere kleur krijgt. */}
                                    Blog overzicht
                                </NavLink>
                            </li>
                            <li>
                                <button type="button"
                                        className="logout-button"
                                        onClick={Logout}>
                                    Uitloggen
                                </button>
                            </li>
                        </>
                      :
                            <li>
                            <NavLink to="/login"
                                     className={({ isActive }) => isActive === true ? 'active-link' : 'default-link'}>
                            Login
                            </NavLink>
                            </li>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;