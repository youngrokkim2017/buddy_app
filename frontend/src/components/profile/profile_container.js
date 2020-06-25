import { connect } from 'react-redux';
import { fetchUserPost, deletePostItem } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        post: Object.values(state.posts.user),
        // post: Object.values(state.post.user),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserPost: id => dispatch(fetchUserPost(id)),
        deletePostItem: (postId) => dispatch(deletePostItem(postId)),
        logout: () => dispatch(logout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);