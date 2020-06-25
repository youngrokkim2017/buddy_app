import { connect } from 'react-redux';
import { fetchPosts, deletePostItem, fetchOnePost } from '../../actions/post_actions';
import { fetchRequests } from '../../actions/request_actions';
import { fetchRequestersFromPost } from '../../actions/requester_actions';
import PostIndexItem from './post_index_item';

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.posts.all),
        currentUser: state.session.user,
        requests: Object.values(state.entities.requests),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchPosts: () => dispatch(fetchPosts()),
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