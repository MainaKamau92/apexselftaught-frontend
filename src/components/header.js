import React from "react";
import net from "../assets/images/net.svg"

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light justify-content-center" id="mainNav">
                <div>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger"
                                                        href="#services">Services</a>
                            </li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger"
                                                        href="/register">Register</a>
                            </li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="masthead ">
                <div className="my-auto row container mx-auto">
                    <div className="col-md-6 col-sm-12 justify-content-start">
                        <img src={net} alt="Logo"/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h3>Build your next project faster with SB UI Kit Pro</h3>
                        <p>
                            Welcome to SB UI Kit Pro, a toolkit for building beautiful web interfaces,
                            created by the developmet team at Start Bootstrap
                        </p>
                    </div>
                </div>

            </section>
        </div>

    )
}

export default Header;