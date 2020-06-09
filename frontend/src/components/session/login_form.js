import React from 'react';
import { withRouter } from 'react-router-dom';

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
        e.preventDefault();

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

    render() {
        return (
            <div className="w-full max-w-xs mx-auto">
                <form onSubmit={this.handleSubmit} className="g-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20 border border-black">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input type="text"
                            autoComplete="username"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="name@example.com"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input type="password"
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="******"
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                        <p className="text-red-500 text-xs italic">Password field is required.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <input type="submit" value="Log In" className="btn btn-black focus:outline-none focus:shadow-outline" />
                        <a className="inline-block align-baseline font-bold text-sm hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);