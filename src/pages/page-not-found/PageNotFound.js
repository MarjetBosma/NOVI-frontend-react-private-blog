import React, { useState } from 'react';
import './PageNotFound.css'
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {

    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
    }, 3000);

const [counter, setCounter] = useState(3);

setInterval(() => {
    setCounter(counter - 1);
}, 1000);

return (
    <>
      <main>
        <h1>PageNotFound</h1>
        <p>Deze pagina bestaat niet. Je wordt automatisch teruggestuurd naar Home in <strong>{ counter } sec.</strong></p>
        <hr/>
      </main>
    </>
  );
}


export default PageNotFound

// Bovenstaande heb ik overgenomen uit de demo van les 3.