import React from "react";
import coder from "../assets/images/coder.svg"
import social from "../assets/images/social.svg"
import recruiter from "../assets/images/recruit.svg"

function About() {
    return (
        <section className="about container">
            <h3 className="text-center">What we are abut</h3>
            <div className="row">
                <div className="card border-0 col-md-4 col-sm-12">
                    <img className="card-img-top" src={coder} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>
                <div className="card border-0 col-md-4 col-sm-12">
                    <img className="card-img-top" src={social} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>
                <div className="card border-0 col-md-4 col-sm-12">
                    <img className="card-img-top" src={recruiter} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About;