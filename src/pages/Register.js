import React, {Component} from "react";
import Axios from "axios";

class Register extends Component {
    state = {
        email: '',
        username: '',
        mobile_number: '',
        password: '',
        confirm_password: '',
        validationErrors: {},
        generalErrors: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            "user": {
                username: this.state.username,
                email: this.state.email,
                mobile_number: this.state.mobile_number,
                password: this.state.password,
            }
        };
        Axios.post(`${process.env.REACT_APP_BASE_URL}users`, options)
            .then(
                response => {
                    console.log(response)
                    if (response.status === 201) {
                        window.location.replace("/")
                    }
                }
            )
            .catch(
                error => {
                    if (error.response !== undefined) {
                        if (error.response.status === 400) {
                            this.setState({validationErrors: error.response.data.errors})
                        } else if (error.response.status === 500) {
                            this.setState({generalErrors: error.response.data.errors})
                        }
                    } else {
                        this.setState({
                            generalErrors: error.toString().includes('Network') ? 'Network error, check your internet connection' : error.toString()
                        })
                    }

                }
            );
    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    render() {
        const generalErrors = this.state.generalErrors;
        const emailError = this.state.validationErrors.email;
        const usernameError = this.state.validationErrors.username;
        const mobileNumberError = this.state.validationErrors.mobile_number
        const passwordError = this.state.validationErrors.password;
        return (
            <div className="card registration col-md-4 col-sm-12 mx-auto p-4 border-0">
                <h3 className="card-title text-center mb-4">Create Account</h3>
                {
                    Object.keys(generalErrors).length ?
                        <div className="alert alert-danger text-center" role="alert">
                            {Object.values(generalErrors)}!
                        </div> : null
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="email"
                               className={`form-control ${emailError ? 'is-invalid' : ''}`}
                               id="email"
                               onChange={this.handleChange}
                               placeholder="Email" required/>
                        <div className="invalid-feedback">
                            {emailError}
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                               id="username"
                               onChange={this.handleChange}
                               placeholder="Username" required/>
                        <div className="invalid-feedback">
                            {usernameError}
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="tel"
                               className={`form-control ${mobileNumberError ? 'is-invalid' : ''}`}
                               id="mobile_number"
                               onChange={this.handleChange}
                               placeholder="Phone" required/>
                        <div className="invalid-feedback">
                            {`${mobileNumberError}, mobile number should be strictly of format +254710123456`}
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="password"
                               className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                               id="password"
                               onChange={this.handleChange}
                               placeholder="Password" required/>
                        <div className="invalid-feedback">
                            {`${passwordError} password should contain an uppercase, lowercase and number`}
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="password"
                               className={`form-control ${this.state.password !== this.state.confirm_password ? 'is-invalid' : ''}`}
                               id="confirm_password"
                               onChange={this.handleChange}
                               placeholder="Confirm Password" required/>
                        <div className="invalid-feedback">
                            Password must match
                        </div>
                    </div>

                    <button type="submit" className="btn btn-block btn-primary">Create Account</button>
                </form>
            </div>

        );
    }
}

export default Register;