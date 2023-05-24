import React from 'react';
import './Navigation.css'
import { NavLink, useNavigate } from 'react-router-dom';

function Navigation( isAuth, toggleAuth) {
    const navigate = useNavigate();

    function signOut() {
        toggleAuth(false);
        navigate('/')  // Terug naar de homepage na uitloggen
    }

    // Eerder had ik een console.log die liet zien wanneer ik wel en niet ingelogd was. Ergens terwijl ik eerder werkte en dingen toevoegde is die gesneuveld en ik weet even niet meer hoe ik het deed... Het in- en uitloggen werkt nu niet.

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

                    {/* Als de gebruiker is ingelogd (isAuth === true), de menu-items blog overzicht en uitloggen zien. Als de gebruiker niet ingelogd is, alleen het menu-item login laten zien. Tenminste, als de code werkt, en dat is nu nog niet het geval. */}
                    {isAuth === true
                      ? <>
                            <li>
                                <NavLink to="/blogposts"
                                         className={({ isActive }) => isActive === true ? 'active-link' : 'default-link'}>
                                    Blog overzicht
                                </NavLink>
                            </li>
                            <li>
                                <button type="button" onClick={signOut}>
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
                {/*Dit werkt nog niet zoals het zou moeten, ik krijg alleen de : situatie te zien. Eerder werkte mijn inlogknop wel, in de zin van dat er dan verschil was of je bij de blogs kon of niet, maar inmiddels doet dit het niet meer... Wat klopt er niet?*/}
            </div>
        </nav>
    );
}

export default Navigation;