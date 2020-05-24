import React from "react";


function Proficiency() {
    return (
        <section>
            <div className="card">
                <h5 className="card-title text-center pb-0 pt-1">Technicals</h5>
                <div className="card-body">
                    Algorithms
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}}
                             aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    Back - End Testing
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}}
                             aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    Front - End Testing
                    <div className="progress mb-1">
                        <div className="progress-bar" role="progressbar" style={{width: 5 + '%'}}
                             aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    Design Patterns
                    <div className="progress mb-1">
                        <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}}
                             aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    Data Structures
                    <div className="progress mb-1">
                        <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}}
                             aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    OOP
                    <div className="progress mb-1">
                        <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}}
                             aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    UI-UX
                    <div className="progress mb-1">
                        <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}}
                             aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    Git
                    <div className="progress mb-1">
                        <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}}
                             aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    Databases
                    <div className="progress mb-1">
                        <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}}
                             aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-3">
                <h5 className="card-title text-center pb-0 pt-1">Soft Skills</h5>
                <div className="card-body">
                    Team Work
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}}
                             aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    Logic
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}}
                             aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    Communication
                    <div className="progress mb-1">
                        <div className="progress-bar" role="progressbar" style={{width: 5 + '%'}}
                             aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Proficiency;