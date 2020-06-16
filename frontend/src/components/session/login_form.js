import React from 'react';
import { withRouter } from 'react-router-dom';
// import { set } from 'mongoose';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);

        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.handleDemoEmail = this.handleDemoEmail.bind(this);
        this.handleDemoPassword = this.handleDemoPassword.bind(this);
    }

    // Once the user has been authenticated, redirect to the post index page
    // componentWillReceiveProps(nextProps) {
    componentDidUpdate(prevProps) {
        // if (nextProps.currentUser === true) {
        if (prevProps.currentUser === true) {
            this.props.history.push('/post');
        }

        // Set or clear errors
        // this.setState({ errors: nextProps.errors });
        // this.setState({ errors: prevProps.errors });
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        // e.preventDefault();
        if (e) {
            e.preventDefault();
        }

        // // add 
        // this.props.clearSessionErrors();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    // DEMO USER LOGIN
    handleDemoSubmit(e) {
        e.preventDefault();

        this.setState({
            email: '',
            password: '',
        });

        this.handleDemoEmail();
    }

    handleDemoEmail(demo) {
        demo = demo || 'demo@example.edu'.split('');

        setTimeout(() => {
            this.setState({
                email: this.state.email + demo.shift()
            });
            demo.length > 0 ? this.handleDemoEmail(demo) : this.handleDemoPassword()
        }, 50)
    }

    handleDemoPassword(demo) {
        demo = demo || 'password'.split('');

        setTimeout(() => {
            this.setState({
                password: this.state.password + demo.shift()
            });
            demo.length > 0 ? this.handleDemoPassword(demo) : this.handleSubmit()
        }, 50)
    }
    //

    render() {
        return (
            <div className="w-full max-w-xs mx-auto bg-white rounded-lg">
                <form onSubmit={this.handleSubmit} className="px-8 pt-6 pb-8 mb-4 mt-20">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input type="text"
                            autoComplete="username"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Username or Email"
                            className="shadow-sm appearance-none font-light border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">
                            Password
                        </label>
                        <input type="password"
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="shadow-sm appearance-none font-light border rounded-lg w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                        <p className="text-red-500 text-xs italic">Password field is required.</p>
                    </div>
                    <div className="flex items-center justify-between">

                        <input type="submit" value="Log In" className="bg-cornflower hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />

                        {/* <a className="inline-block align-baseline font-medium text-sm hover:text-blue-800" href="#">
                            Forgot Password?
                        </a> */}
                        <button onClick={this.handleDemoSubmit}>Demo Log In</button>
                    </div>
                    {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);