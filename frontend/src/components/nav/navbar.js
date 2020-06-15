import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import logo from '../logo.svg'

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
                    <Link to={'/post'}>
                        <div className="flex text-xl mb-4 flex-shrink-0 hover:text-blue-600">
                            <svg className="flex-none self-center mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none"><path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z" /></svg>
                            <h1 className="text-2xl font-medium">Home</h1>
                        </div>
                    </Link>

                    <Link to={'/new_post'}>
                        <div className="flex text-xl mb-4 flex-shrink-0 hover:text-blue-600">
                            <svg className="flex-none self-center mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z" /></svg>
                            <h1 className="text-2xl font-medium">Compose</h1>
                        </div>
                    </Link>

                    <Link to={'/profile'}>
                        <div className="flex text-xl mb-4 flex-shrink-0 hover:text-blue-600">
                            <svg className="flex-none self-center mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none"><path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" /></svg>
                            <h1 className="text-2xl font-medium">Profile</h1>
                        </div>
                    </Link>
                </>
            );
        } else {
            return (
                <>
                    <Link to={'/login'} className="">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z" /></svg>
                        <span className="">Login</span>
                    </Link>

                    <Link to={'/signup'} className="" href="">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z" /></svg>
                        <span className="">Sign up</span>
                    </Link>
                </>
            );
        }
    }

    render() {
        // console.log(this.props);

        return (
            <div className="hidden lg:block w-24 h-screen pt-6 lg:w-1/5">
                <div className="mb-8 flex justify-center lg:justify-start">
                    <Link to="" className="w-8 h-8 lg:w-12 lg:h-12">
                            <img src={logo} className="" alt="logo"/>
                    </Link>
                </div>
                <div>
                    {this.getLinks()}
                </div>

                <button className="absolute bottom-0 mb-12 text-gray-600 mt-5 text-lg" onClick={this.logoutUser}>Log Out</button>
                
            </div>
        );
    }
}

// export default NavBar;
export default withRouter(NavBar);