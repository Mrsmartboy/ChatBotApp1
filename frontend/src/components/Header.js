import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import './Header.css'; // Import your CSS file

const Header = () => {

    const navigate = useNavigate()
    const logout=()=>{
       
       localStorage.removeItem('token')
       const isAuthenticated =  !!localStorage.getItem('token');
      
       !isAuthenticated && navigate('/login')
    }
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
         
          <li>
            <Link to="/chatbot" className="nav-link">Chat Bot</Link>
          </li>
          <li>
          <button type="button" onClick={logout}> Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
