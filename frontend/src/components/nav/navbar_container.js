import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

// const mapStateToProps = state => ({
//     loggedIn: state.session.isAuthenticated
// });

// export default connect(
//     mapStateToProps,
//     { logout }
// )(NavBar);

const mapStateToProps = state => {
    let currentUserId;

    if (state.session.user) {
        currentUserId = state.session.user.id
    }

    return {
        loggedIn: state.session.isAuthenticated,
        currentUserId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);