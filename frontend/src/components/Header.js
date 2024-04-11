import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import Cookies library
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        // Remove token cookie
        Cookies.remove('token');
        // Check if token cookie exists
        const isAuthenticated = !!Cookies.get('token');
        // If not authenticated, redirect to login page
        !isAuthenticated && navigate('/login');
    };

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
                        <button type="button" onClick={logout} className='logout-button'> Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
