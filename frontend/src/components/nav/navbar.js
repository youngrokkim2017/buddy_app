import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    // componentDidUpdate() {
    //     // if (nextProps.currentUser === true) {
    //     if (this.props.loggedIn === false) {
    //         this.props.history.push('/');
    //     }
    // }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();

        this.props.history.push('/');

        // if (this.props.loggedIn === false) {
        //     this.props.history.push('/');
        // };

        // this.props.history.push('/');
    };

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <>
                    <Link to={'/new_post'}>Create a Post</Link>
                    <Link to={'/post'}>Activity Feed</Link>
                    <Link to={'/profile'}>Profile</Link>
                    {/* <Link to={'/'} onClick={this.logoutUser}>Log Out</Link> */}
                    {/* <Link onClick={this.logoutUser}>Log Out</Link> */}
                    <button onClick={this.logoutUser}>Log Out</button>
                </>
            );
        } else {
            return (
                <>
                    {/* <Link to={'/post'}>Browse</Link> */}
                    <Link to={'/signup'} className="btn btn-black">Signup</Link>
                    <Link to={'/login'} className="btn btn-white">Login</Link>
                </>
            );
        }
    }

    render() {
        // console.log(this.props);

        return (
            <nav className="flex items-center justify-between flex-wrap bg-white">
                <Link to={'/'} className="font-semibold text-xl tracking-tight"><h1>p2p</h1></Link>
                <div className="navbar-naviation">   
                    {this.getLinks()}
                </div>
            </nav>
        );
    }
}

// export default NavBar;
export default withRouter(NavBar);