// src/Components/Navbar.js
import React from 'react';
import './Styles/Navbar.css'; // Import the custom CSS file
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Logo Image */}
                <a className="navbar-brand" href="/">
                    <img 
                        src={require("./Images/cropped_image.jpg")} // Replace with the actual path to your logo image
                        alt="Pulse Scientific Logo"
                        style={{ height: '45px', width: 'auto' }}  // Adjust the height and width to fit your navbar
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/comingsoon">products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/comingsoon">applications</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/comingsoon">downloads</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/comingsoon">service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/comingsoon">contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
