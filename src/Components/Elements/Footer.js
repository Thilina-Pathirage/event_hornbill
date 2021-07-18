import React from 'react';
import './Footer.css'

const Footer = props => {
    return (
        <div>
            <div className="copyright-para">
                <span className="copyright">© 2021 Copyright: Thilina Pathirage</span>
            </div>
            <div className="my-footer"
                style={{
                    borderTop: `solid ${props.MainColor} 1px`,
                    transitionDuration: "0.5s"
                }}
            >

                <div className="social-icons">
                    <i className="fab fa-linkedin"
                        style={{
                            color: `${props.MainColor}`,
                            transitionDuration: "0.5s"

                        }}
                    ></i>
                    <i className="fab fa-github-square"
                        style={{
                            color: `${props.MainColor}`,
                            transitionDuration: "0.5s"

                        }}
                    ></i>
                    <i className="fab fa-twitter-square"
                        style={{
                            color: `${props.MainColor}`,
                            transitionDuration: "0.5s"

                        }}
                    ></i>
                </div>
            </div>

        </div>
    );
}

export default Footer;