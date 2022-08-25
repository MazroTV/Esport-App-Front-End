import { Component} from 'react';

import image from "../../images/rednation.jpg";
import React from "react";
import './Login.css';


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:  '',
            password: ''
        }
    }

    render() {
        return (

            <section className="h-100 gradient-form">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                <img className="login-logo" src={image} alt="logo"/>
                                                <h4 className="mt-1 mb-5 pb-1">Red Nation Login</h4>
                                            </div>

                                            <form>
                                                <p>Please login to your account</p>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="username" className="form-control"
                                                           placeholder="Username"/>
                                                    <label className="form-label"
                                                           htmlFor="form2Example11">Username</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="password"
                                                           className="form-control"
                                                           placeholder="Password"/>

                                                    <label className="form-label"
                                                           htmlFor="form2Example22">Password</label>
                                                </div>

                                                <div className="text-center pt-1 mb-2 pb-1">
                                                    <button
                                                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                        type="button">Log in
                                                    </button>

                                                </div>
                                                <div className="text-center mb-5">
                                                    <a className="text-muted" href="esport-app/src/pages/Login Page/Login#!">Forgot password?</a>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <a href="/sign-up">
                                                        <button type="button" className="btn btn-outline-danger">Create
                                                            new
                                                        </button>
                                                    </a>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">We are more than just a company</h4>
                                            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        );
    }
}

export default Login;