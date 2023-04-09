import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <nav>
           <Link to="/">Home</Link>
           <Link to="/stats">Statistics</Link>
           <Link to="/">Home</Link>

        </nav>
    );
};

export default Header;