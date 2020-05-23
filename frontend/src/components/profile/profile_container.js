import { connect } from 'react-redux';
import { fetchUserPost } from '../../actions/post_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        post: Object.values(state.post.user),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserPost: id => dispatch(fetchUserPost(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);