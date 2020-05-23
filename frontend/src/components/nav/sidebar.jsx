import React from "react";
import { Link } from "react-router-dom";

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to={'/'}>Home</Link>
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
                    <Link to={'/'}>Home</Link>
                    <Link to={'/post'}>Browse</Link>
                </div>
            );
        }
    }

    openNav(e) {
        e.preventDefault();
        // document.getElementById("mySidebar").style.display = "block";

        document.getElementById("sidebar-id").style.width = "250px";
        document.getElementById("main-id").style.marginLeft = "250px";
    }

    closeNav(e) {
        e.preventDefault();
        // document.getElementById("mySidebar").style.display = "none";

        document.getElementById("sidebar-id").style.width = "0";
        document.getElementById("main-id").style.marginLeft = "0";
    }

    render() {
        return (
            <div>
                {/* <div className="w3-sidebar w3-bar-block w3-collapse w3-card" style="width:200px;" id="mySidebar">
                    <button className="w3-bar-item w3-button w3-hide-large" onClick={this.closeNav()}>Close &times;</button>
                    <a href="#" className="w3-bar-item w3-button">Link 1</a>
                    <a href="#" className="w3-bar-item w3-button">Link 2</a>
                    <a href="#" className="w3-bar-item w3-button">Link 3</a>
                </div>

                <div className="w3-main" style="margin-left:200px">
                    <div className="w3-teal">
                        <button className="w3-button w3-teal w3-xlarge" onClick={this.openNav()}>&#9776;</button>
                        <div className="w3-container">
                            <h1>My Page</h1>
                        </div>
                    </div>
                </div> */}
                <div>
                    <div id="sidebar-id" className="sidebar">
                        <button className="closebtn" onClick={this.closeNav}>
                            &times;
                        </button>
                        {this.getLinks()}
                    </div>

                    <div id="main-id">
                        <button className="openbtn" onClick={this.openNav}>
                            &#9776;
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar;