import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to={'/new_post'}>Create a Post</Link>
                    <Link to={'/post'}>Browse</Link>
                    <Link to={'/profile'}>Profile</Link>
                    {/* <button onClick={this.logoutUser}>Log Out</button> */}
                    <Link to={'/'} onClick={this.logoutUser}>Log Out</Link>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to={'/post'}>Browse</Link>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {/* <h1>APP</h1> */}
                <Link to={'/'}><h1>APP NAME</h1></Link>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;