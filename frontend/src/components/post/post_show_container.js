import { connect } from 'react-redux';
import { fetchPosts, fetchOnePost ,deletePostItem } from '../../actions/post_actions';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
    // return {
    //     post: Object.values(state.post.all),
    //     post: Object.values(state.posts.all),
    //     currentUser: state.session.user,
    // };

    // let postId = ownProps.match.params.postId;
    // let postId = ownProps.match.params._id;
    let postId = ownProps.match.params.id;
    // let postId = ownProps.id;

    let currentUserId;
    if (state.session.user) {
        currentUserId = state.session.user.id;
    };

    // let posts = Object.values(state.entities.posts);
    let posts = Object.values(state.entities.posts.all);

    return {
        // post: state.post[postId],
        // post: state.posts[postId],
        // post: state.entities.post[postId],
        // post: state.entities.posts[postId],
        post: state.entities.posts[postId],
        currentUserId,
        currentUser: state.session.user,
        // posts: Object.values(state.entities.posts.all),
        // posts: Object.values(state.entities.posts),
        // post: state.entities.posts[ownProps.match.params.postId],
        postId,
        posts,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchOnePost: (postId) => dispatch(fetchOnePost(postId)),
        deletePostItem: (postId) => dispatch(deletePostItem(postId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostShow);