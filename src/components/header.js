import React from "react";
import net from "../assets/images/net.svg"

function Header() {
    return (
        <section className="masthead ">
            <div className="my-auto row container mx-auto">
                <div className="col-md-6 col-sm-12 justify-content-start">
                    <img src={net} alt="Logo" />
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
    )
}
export default Header;