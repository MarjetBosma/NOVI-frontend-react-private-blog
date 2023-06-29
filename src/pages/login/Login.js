import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import users from '../../data/users.json'

function Login({ toggleAuth }) {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
        Gebruikersnaam: ${username}
        Wachtwoord: ${password}
        `)
        const responseUsername = users.find((test) => {
            return test.username === username
        });
        const responsePassword = users.find((test) => {
            return test.password === password

        });

        if (responseUsername) {
            toggleAuth(true)
            navigate('/');
        } else {
            console.log("Gebruikersnaam incorrect");
        }

        if (responsePassword) {
            toggleAuth(true)
            navigate('/')
        } else {
            console.log("Wachtwoord incorrect")
        }
    }

    return (
        <main>
            <h1>Login</h1>
            <h3>Vul je inloggegevens in</h3>

            <form className="loginForm"
                  onSubmit={handleSubmit}>
                <label htmlFor="username-field">Gebruikersnaam</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password-field">Wachtwoord</label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit"
                        className="login-button"
                        onClick={handleSubmit}>
                Inloggen
                </button>
            </form>
        </main>
    );
}

export default Login;