import React, {Component} from 'react';
import {Link} from 'react-router'


class Navigation extends Component {

    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <Link className="navbar-brand" to="/">Vataxia</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">My Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/update-password">Account</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}

export default Navigation;