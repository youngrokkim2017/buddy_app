import React from 'react';
import { Link } from "react-router-dom";
// import NavBar from '../nav/navbar';

class MainPage extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     this.props.fetchPost();
    // }

    render() {
        // console.log(this.props);

        return (
            <div>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
    }
}

export default MainPage;