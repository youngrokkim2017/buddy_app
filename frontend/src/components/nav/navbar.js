import React from 'react';
import { Link, withRouter } from 'react-router-dom'
// import logo from '../logo.svg'
import logo from '../../assets/logo.svg'

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
    };

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <>
                    <Link to={'/post'}>
                        <div className="flex text-xl mb-4 flex-shrink-0 hover:text-blue-600">
                            <svg className="flex-none self-center mr-2 fill-current w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z" /></svg>
                            <h1 className="text-2xl font-medium hidden lg:block">Home</h1>
                        </div>
                    </Link>

                    <Link to={'/new_post'}>
                        <div className="flex text-xl mb-4 flex-shrink-0 hover:text-blue-600">
                            <svg className="flex-none self-center mr-2 fill-current w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z" /></svg>
                            <h1 className="text-2xl font-medium hidden lg:block">Compose</h1>
                        </div>
                    </Link>

                    <Link to={'/profile'}>
                        <div className="flex text-xl mb-4 flex-shrink-0 hover:text-blue-600">
                            <svg className="flex-none self-center mr-2 fill-current w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" /></svg>
                            <h1 className="text-2xl font-medium hidden lg:block">Profile</h1>
                        </div>
                    </Link>
                    <Link to={'/notifications'}>
                        <div className="flex text-xl mb-4 flex-shrink-0 hover:text-blue-600">
                            <div className="flex-none self-center mr-2 relative">
                                <svg className="flex-none fill-current w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z" /></svg>
                                <span className="absolute -mt-1 lg:mt-0 ml-4 lg:ml-6 top-0 rounded-full w-2 h-2 bg-red-600 text-xs text-white text-center"></span>
                            </div>
                            <h1 className="text-2xl font-medium hidden lg:block">Notifications</h1>
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

        if (this.props.location.pathname === "/" || this.props.location.pathname === "/login" || this.props.location.pathname === "/signup") {
            return (
                <>
                </>
            );
        } else {
            return (
                <div className="bg-white p-8 pt-4 pb-0 border-t border-gray-300 fixed inset-x-0 bottom-0 z-10  w-full lg:static lg:block lg:h-screen lg:pt-6 lg:w-1/5 lg:mr-4">
                    <div className="hidden lg:flex mb-8 justify-center lg:justify-start">
                        <Link to={"/"} className="w-8 h-8 lg:w-12 lg:h-12">
                            <img src={logo} className="" alt="logo" />
                        </Link>
                    </div>
                    <div className="flex justify-between lg:block lg:justify-start">
                        {this.getLinks()}
                    </div>

                    <button className="relative bottom-0 mt-8 text-gray-600 text-lg ml-2 hidden lg:block" onClick={this.logoutUser}>Log Out</button>

                </div>
            );
        }

        // return (
        //     <div className="bg-white p-8 pt-4 pb-0 border-t border-gray-300 fixed inset-x-0 bottom-0 z-10  w-full lg:static lg:block lg:h-screen lg:pt-6 lg:w-1/5 lg:mr-4">
        //         <div className="hidden lg:flex mb-8 justify-center lg:justify-start">
        //             <Link to={"/"} className="w-8 h-8 lg:w-12 lg:h-12">
        //                 <img src={logo} className="" alt="logo" />
        //             </Link>
        //         </div>
        //         <div className="flex justify-between lg:block lg:justify-start">
        //             {this.getLinks()}
        //         </div>

        //         <button className="relative bottom-0 mt-8 text-gray-600 text-lg ml-2 hidden lg:block" onClick={this.logoutUser}>Log Out</button>

        //     </div>
        // );
    }
}

// export default NavBar;
export default withRouter(NavBar);