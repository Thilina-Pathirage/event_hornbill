import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {

    const Redirect = () => {
        window.location.href = "/";
    }

    const Redirect2 = () => {
        window.location.href = "/create";
    }


    return (
        <div>
            <div className="d2 nav-outer center">
                <h1>Event Hornbill <i className="far fa-user-circle"></i></h1>
            </div>
            <ul className="cu-nav-items" >
                <li className="cu-item">
                    <Link onClick={Redirect} to="/">All Events</Link>
                </li>
                <li className="cu-item">
                    <Link onClick={Redirect2} to="/create">Create Event</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar