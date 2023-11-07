import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { AppContext } from '../Main';


 const Header = () => {
  const { sessionId}= useContext(AppContext);
  return (
    <nav className="header">
        <div>
            <h2>{sessionId}</h2>
        </div>
        <article>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            {
            <Link to={"/login"}>Login</Link>
            }
        </article>
    </nav>
   
  );
}
export default Header;