import { connect } from 'react-redux';
import { fetchPost, deletePostItem, composePost } from '../../actions/post_actions';
import Post from './post';

const mapStateToProps = (state) => {
    return {
        post: Object.values(state.post.all),
        // post: Object.values(state.post),
        // post: Object.values(state.entities.posts),
        currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: () => dispatch(fetchPost()),
        deletePostItem: (postId) => dispatch(deletePostItem(postId)),
        composePost: data => dispatch(composePost(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);