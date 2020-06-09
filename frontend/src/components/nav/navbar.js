import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheets/global.css'

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
                <>
                    <Link to={'/new_post'}>Create a Post</Link>
                    <Link to={'/post'}>Browse</Link>
                    <Link to={'/profile'}>Profile</Link>
                    {/* <button onClick={this.logoutUser}>Log Out</button> */}
                    <Link to={'/'} onClick={this.logoutUser}>Log Out</Link>
                </>
            );
        } else {
            return (
                <>
                    {/* <Link to={'/post'}>Browse</Link> */}
                    <Link to={'/signup'} className="btn btn-blue">Signup</Link>
                    <Link to={'/login'} className="btn btn-white">Login</Link>
                </>
            );
        }
    }

    render() {
        return (
            <nav className="navbar-container">
                <Link to={'/'} className="navbar-brand"><h1>p2p</h1></Link>
                <div className="navbar-naviation">   
                    {this.getLinks()}
                </div>
            </nav>
        );
    }
}

export default NavBar;