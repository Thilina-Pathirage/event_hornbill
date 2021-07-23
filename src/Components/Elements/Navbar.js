import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = props => {

    

    const Redirect = () => {
        window.location.href = "/";
    }

    const Redirect2 = () => {
        window.location.href = "/create";
    }

    return (
        <div>
            <div className="d2 nav-outer center"
                style={{
                    borderBottom: `solid ${props.MainColor} 1px`,
                    borderLeft: `solid ${props.MainColor} 1px`,
                    transitionDuration: "0.5s"
                }}
            >
                <h1>Event Hornbill <i className="far fa-user-circle"
                    style={{
                        color: `${props.MainColor}`,
                        transitionDuration: "0.5s"
                        ,
                    }}
                ></i></h1>
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