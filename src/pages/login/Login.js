import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import users from '../../data/posts.json'

function Login({ toggleAuth }) {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function signIn() {
        toggleAuth(true);
        navigate('/'); // Na inloggen naar de homepage
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
        Gebruikersnaam: ${username},
        Wachtwoord: ${password}
        `)
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
                    value="" // Hoe verwijs ik naar de data in users.json? Gaat dit met mappen? En moet ik nog iets met een if/else o.i.d. voor als de username niet herkend wordt?
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password-field">Wachtwoord</label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    value={""} // Hoe verwijs ik naar de data in users.json? Gaat dit met mappen? En moet ik nog iets met een if/else o.i.d. voor als het password niet herkend wordt?
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={signIn}>
                Inloggen
                </button>
            </form>
            {/*Het formulier is nog niet functioneel. Ik kan niets typen, en er gebeurt ook nog niks als ik op inloggen druk. Wat zie ik over het hoofd? In een eerdere fase werkte mijn simpele inlogknop wel, in de zin van dat er dan verschil was of je bij de blogs kon of niet, maar inmiddels doet dit het niet meer...*/}
        </main>
    );
}

export default Login;