import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../assets/logo.svg';
// import hero from '../../assets/hero.png'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        let inputEmail
        // if (this.props.location.state.email === undefined) {
        if (!this.props.location.state) {
            inputEmail = '';
        } else {
            inputEmail = this.props.location.state.email;
        }

        // if (this.props.location.state) {
        //     this.state = {
        //         email: '',
        //         // email: this.props.location.state.email,
        //         // handle: '',
        //         firstName: '',
        //         lastName: '',
        //         password: '',
        //         password2: '',
        //         errors: {}
        //     };
        // } else {
        //     this.state = {
        //         // email: '',
        //         email: this.props.location.state.email,
        //         // handle: '',
        //         firstName: '',
        //         lastName: '',
        //         password: '',
        //         password2: '',
        //         errors: {}
        //     };
        // }
        this.state = {
            // email: '',
            email: inputEmail,
            // handle: '',
            firstName: '',
            lastName: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
        this.getLinkToHome = this.getLinkToHome.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    componentDidUpdate(prevProps) {
        // if (nextProps.signedIn === true) {
        if (prevProps.signedIn === true) {
            // this.props.history.push('/login');
            this.props.history.push('/post');
        }

        // this.setState({ errors: nextProps.errors });
        // this.setState({ errors: prevProps.errors });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            // handle: this.state.handle,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);

        this.props.history.push('/login');
        // this.props.history.push('/post');

        // to login from signup page and push history as /posts
        // this.props.login(user);
    }

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

    getLinkToHome() {
        return (
            <nav className="flex items-center justify-between flex-wrap">
                <Link to="" className="flex flex-grow items-center text-white w-auto block">
                    <img src={logo} className="w-8 h-8 mr-4" alt="logo" />
                    <h1 className="text-blue-800 text-2xl">people2places</h1>
                </Link>
            </nav>
        )
    }

    // MEDIA
    handleUploadMediaFile(e) {
        const file = e.currentTarget.files[0];

        if (file) {
            this.getSignedRequest(file);
        };
    }

    getSignedRequest(file) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', `/sign-s3/file-name=${file.name}&file-type=${file.type}`);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                
                    this.uploadFile(file, response.signedRequest, response.url);
                } else {
                    alert ('coudl not get signed URL');
                }
            }
        }
        xhr.send();
    }

    uploadFile(file, signedRequest, url) {
        const xhr = new XMLHttpRequest();

        xhr.open('PUT', signedRequest);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.setState({
                        profilePhotoUrl: url,
                    });
                } else {
                    alert('could not upload file');
                }
            }
        }
        xhr.send(file);
    }
    //

    render() {
        // console.log('signup', this.props.location.state.email);

        return (
            <div className="signup-form-container">
                <div>
                    {this.getLinkToHome()}
                </div>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        {/* <br /> */}
                        <input type="text"
                            autoComplete="username"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        {/* <input type="text"
                            autoComplete="username"
                            value={this.state.handle}
                            onChange={this.update('handle')}
                            placeholder="Handle"
                        />
                        <br /> */}
                        <input type="text"
                            autoComplete="username"
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                            placeholder="First Name"
                        />
                        <br />
                        <input type="text"
                            autoComplete="username"
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                            placeholder="Last Name"
                        />
                        <br />
                        <input type="password"
                            autoComplete="new-password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="password"
                            autoComplete="new-password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <br />
                        <input type="submit" value="Sign Up" />
                        {this.renderErrors()}
                    </div>
                </form>
                <div>
                    Already have an account?
                    <Link to={'/login'}>Log in</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(SignupForm);