import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="copyright-para">
                <span className="copyright">© 2021 Copyright: Thilina Pathirage</span>
            </div>
            <div className="my-footer">

                <div className="social-icons">
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-github-square"></i>
                    <i className="fab fa-twitter-square"></i>
                </div>
            </div>

        </div>
    );
}

export default Footer;