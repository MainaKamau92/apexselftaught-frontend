import React from "react";
import profile from "../assets/images/prof.jpg"
import {Smile, Briefcase, MapPin, Mail, GitHub, Linkedin, Globe, Clipboard} from "react-feather"

function ProfileCard() {
    return (
        <section>
            <div className="card p-0">
                <div className="card-header bg-primary text-white">
                    Bio
                </div>
                <div className="card-body p-0">
                    <div className="text-center mb-5 profile-image-div">
                        <img className="rounded-circle profile-image pt-3 pb-3" src={profile} alt="profile"/>
                    </div>
                    <div className="profile-bio pl-3 pr-2 mx-auto">
                        <h5>About</h5>
                        <p>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour,
                            or randomised words which don't look even slightly believable.
                            If you are going to use a passage of Lorem Ipsum
                        </p>
                    </div>
                    <div className="mx-auto pl-3 pb-3">
                        <div className="">
                            <div>
                                <Smile className="pr-1"/> Maina Lewis Kamau
                            </div>
                            <div>
                                <Briefcase className="pr-1"/> Software
                            </div>
                            <div>
                                <MapPin className="pr-1"/> Nairobi
                            </div>
                            <div>
                                <Mail className="pr-1"/> lewiikamaa8@gmail.com
                            </div>
                            <div>
                                <GitHub className="pr-1"/> Github
                            </div>
                            <div>
                                <Linkedin className="pr-1"/> Linkedin
                            </div>
                            <div>
                                <Globe className="pr-1"/> Website
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card mt-3">
                <h5 className="card-title text-center pt-2">Certifications</h5>
                <div className="card-body">
                    <div>
                        <Clipboard className="pr-1"/>
                        GCP
                    </div>
                    <div>
                        <Clipboard className="pr-1"/>
                        AWS
                    </div>
                    <div>
                        <Clipboard className="pr-1"/>
                        Azure
                    </div>
                </div>
            </div>
        </section>


    )
}

export default ProfileCard;