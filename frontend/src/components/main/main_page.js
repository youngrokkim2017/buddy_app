import React from 'react';
import { Link, withRouter } from "react-router-dom";
import logo from '../logo.svg'
import hero from '../hero.png'
// import NavBar from '../nav/navbar';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            // handle: '',
            firstName: '',
            lastName: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchPost();
    // }

    handleSubmit(e) {
        e.preventDefault();
        // let user = {
        //     email: this.state.email,
        //     // handle: this.state.handle,
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        //     password: this.state.password,
        //     password2: this.state.password2
        // };

        this.props.history.push('/signup');
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        // console.log(this.props);

        return (
            <div className="w-full max-w-screen-xl mx-auto p-6">
                <nav className="flex items-center justify-between flex-wrap">
                    <Link to="" className="flex flex-grow items-center text-white w-auto block">
                        <img src={logo} className="w-8 h-8 mr-4" alt="logo" />
                        <h1 className="text-blue-800 text-2xl">people2places</h1>
                    </Link>
                    <div className="items-center">
                        <Link to={'/login'} className="text-blue-800 mr-4 text-lg">Log in</Link>
                        <Link to={'/signup'} className="hidden lg:inline-block text-lg px-4 py-2 leading-none rounded text-white bg-blue-600">Sign Up</Link>
                    </div>
                </nav>
                <main className="flex flex-wrap-reverse lg:flex-no-wrap mx-6 lg:mx-16 mt-12 lg:mt-24 items-center">
                    <div className="flex-grow w-full sm:w-3/5 lg:w-1/2 mr-0 lg:mr-4 lg:p-6 p-4 mt-4 lg:mt-0 mx-auto">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-none">Get there safely, together</h1>
                        <span className="mt-6 block sm:hidden h-1 w-16 bg-blue-200"></span>
                        <p className="mt-6 w-full lg:w-4/5 text-lg">Built for college students, late-night studiers, food runs, and more. <span className="text-blue-800 font-medium">Don't go alone.</span></p>
                        <form 
                            className="mt-6 bg-gray-100 border border-gray-300 text-gray-600 flex items-center rounded-lg max-w-sm py-2 px-4 pr-2 focus-within:border-blue-600"
                            // onSubmit={this.props.history.push('/signup')}
                        >
                            <input 
                                className="appearance-none bg-transparent border-none w-full placeholder-gray-600 leading-tight focus:outline-none" 
                                type="email" 
                                autoComplete='username'
                                placeholder="Your Email" 
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                            <Link 
                                // to={'/signup'} 
                                to={{
                                    pathname:'/signup',
                                    state: {
                                        email: this.state.email
                                    }
                                }}
                                className="inline-block text-lg px-4 py-2 leading-none rounded text-white bg-blue-600 shadow-lg flex-shrink-0"
                            >
                                Sign Up
                            </Link>
                        </form>
                        {/* <form onSubmit={this.handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    autoComplete="username"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Your Email"
                                />
                                <input type="submit" value="Get Started" />
                            </div>
                        </form> */}
                    </div>
                    <div className="w-full sm:w-3/5 lg:w-1/2 mx-auto">
                        <img src={hero} alt="hero" />
                    </div>
                </main>
            </div>
        );
    }
}

// export default MainPage;
export default withRouter(MainPage);