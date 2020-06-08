import { connect } from 'react-redux';
import { fetchUserPost, deletePostItem } from '../../actions/post_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        post: Object.values(state.post.user),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserPost: id => dispatch(fetchUserPost(id)),
        deletePostItem: (postId) => dispatch(deletePostItem(postId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);