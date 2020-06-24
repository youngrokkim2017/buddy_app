import { connect } from 'react-redux';
import { fetchPost, deletePostItem, fetchOnePost } from '../../actions/post_actions';
import { fetchRequests } from '../../actions/request_actions';
import { fetchRequestersFromPost } from '../../actions/requester_actions';
import PostIndexItem from './post_index_item';

const mapStateToProps = (state) => {
    return {
        // post: Object.values(state.post.all),
        posts: Object.values(state.posts.all),
        // post: Object.values(state.post),
        // post: Object.values(state.entities.posts),
        currentUser: state.session.user,
        requests: Object.values(state.entities.requests),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchPost: () => dispatch(fetchPost()),
        fetchOnePost: (postId) => dispatch(fetchOnePost(postId)),
        deletePostItem: (postId) => dispatch(deletePostItem(postId)),
        fetchRequests: (postId) => dispatch(fetchRequests(postId)),
        fetchRequestersFromPost: (postId) => dispatch(fetchRequestersFromPost(postId)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndexItem);