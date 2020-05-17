import React, {Component} from "react";
import Axios from "axios";


class Login extends Component {
    state = {
        email: '',
        password: '',
        validationErrors: {},
        generalErrors: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            "user": {
                email: this.state.email,
                password: this.state.password,
            }
        };
        Axios.post(`${process.env.REACT_APP_BASE_URL}login/`, options)
            .then(
                response => {
                    if (response.status === 200) {
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        const username = response.data.user.username
                        window.location.replace(`/profile/${username}`)
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
        const {validationErrors, generalErrors} = this.state;
        return (
            <div className="card registration col-md-4 col-sm-12 mx-auto p-4 border-0">
                <h3 className="card-title text-center mb-4">Login</h3>
                {Object.keys(validationErrors).length ?
                    <div className="alert alert-danger text-center" role="alert">
                        {Object.values(validationErrors)}
                    </div> :
                    Object.keys(generalErrors).length ?
                        <div className="alert alert-danger text-center" role="alert">
                            {Object.values(generalErrors)}
                        </div> : null
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="email"
                               className="form-control"
                               id="email"
                               onChange={this.handleChange}
                               placeholder="Email" required/>
                    </div>

                    <div className="form-group">
                        <input type="password"
                               className="form-control"
                               id="password"
                               onChange={this.handleChange}
                               placeholder="Password" required/>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                </form>
            </div>

        );
    }
}

export default Login;