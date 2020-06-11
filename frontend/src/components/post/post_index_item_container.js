import { connect } from 'react-redux';
import { fetchPost, deletePostItem, fetchOnePost } from '../../actions/post_actions';
import PostIndexItem from './post_index_item';

const mapStateToProps = (state) => {
    return {
        // post: Object.values(state.post.all),
        post: Object.values(state.post),
        // post: Object.values(state.entities.posts),
        currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchPost: () => dispatch(fetchPost()),
        fetchOnePost: (postId) => dispatch(fetchOnePost(postId)),
        deletePostItem: (postId) => dispatch(deletePostItem(postId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndexItem);