import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
        setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton); 

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src='images/Screenshot (350).png' width='100px'/> <i className='fa fa-typo3 ' />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Our Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Booking
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    <li className='nav-item-start'>
                        <Link to="/" className='nav-links-start' onClick={closeMobileMenu}>
                            Get Started
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
