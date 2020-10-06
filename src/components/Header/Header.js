import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    const { loggedInUser } = useContext(UserContext);
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Navbar expand="lg" className="mt-3">
                            <Link to="/">
                                <img src={logo} alt="" className="img-fluid" />
                            </Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Link className="nav-link" to="">News</Link>
                                    <Link className="nav-link" to="/tasks">Donation</Link>
                                    <Link className="nav-link" to="">Events</Link>
                                    <Link className="nav-link" to="">Blog</Link>
                                    {
                                        !loggedInUser.email &&
                                        <Link className="nav-link" to="/login">Register</Link>
                                    }
                                    {
                                        loggedInUser.email &&
                                        <div className="nav-link">
                                            {loggedInUser.displayName}
                                        </div>
                                    }
                                    <Link className="nav-link" to="">Admin</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;