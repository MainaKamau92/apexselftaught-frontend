import React from "react";
import ProfileCard from "../components/profilecard";
import Proficiency from "../components/proficiencies";

function Profile() {
    return (
        <section className="row container mx-auto mt-5 p-0">
            <div className="col-md-6 col-sm-12">
                <ProfileCard/>
            </div>
            <div className="col-md-6 col-sm-12">
                <Proficiency/>
            </div>

        </section>

    )
}

export default Profile;