import React from "react";
import {Bell, Briefcase, Users, Hexagon, ChevronDown} from "react-feather"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-white" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#">Apex<Hexagon className="pl-1"/></a>

                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#about">
                                recruiters
                                <Users className="pl-1"/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#services">
                                jobs
                                <Briefcase className="pl-1"/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/register">
                                notifications
                                <Bell className="pl-1"/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/">
                                me
                                <ChevronDown className="pl-1"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;