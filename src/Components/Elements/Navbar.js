import React from 'react';
import './Navbar.css';
const Navbar = () => {

    const Redirect = () =>{
        window.location.href="/events";
    }

    const Redirect2 = () =>{
        window.location.href="/";
    }


    return(
        <div className="nav center">
            <button className="nav-button" onClick={Redirect}>Events</button> 
            <button className="nav-button" onClick={Redirect2}>Create Event</button>
        </div>
    );
}

export default Navbar