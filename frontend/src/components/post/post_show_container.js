import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { fetchPosts, fetchOnePost, deletePostItem } from '../../actions/post_actions';
// import { fetchRequests } from '../../actions/request_actions';
// import { sendRequest, deleteRequest } from '../../actions/request_actions';
import { sendRequest, fetchRequests, deleteRequest } from '../../actions/post_actions';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
    // return {
    //     post: Object.values(state.post.all),
    //     post: Object.values(state.posts.all),
    //     currentUser: state.session.user,
    // };

    let postId = ownProps.match.params.id;

    let currentUserId;
    if (state.session.user) {
        currentUserId = state.session.user.id;
    };

    // let posts = Object.values(state.entities.posts);
    // let posts = Object.values(state.entities.posts.all);

    return {
        post: state.entities.posts[postId],
        currentUserId,
        currentUser: state.session.user,
        postId,
        // posts,
        requests: Object.values(state.entities.requests),
        // requests: state.entities.requests,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchOnePost: (postId) => dispatch(fetchOnePost(postId)),
        deletePostItem: (postId) => dispatch(deletePostItem(postId)),
        fetchRequests: (postId) => dispatch(fetchRequests(postId)),
        request: postId => dispatch(sendRequest(postId)),
        deleteRequest: requestId => dispatch(deleteRequest(requestId)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostShow);

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(withRouter(PostShow));