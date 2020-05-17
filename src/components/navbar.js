import React from "react";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light justify-content-center" id="mainNav">
            <div>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a>
                        </li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/register">Register</a>
                        </li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;