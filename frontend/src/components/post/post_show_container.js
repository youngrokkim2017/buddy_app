import { connect } from 'react-redux';
import { fetchPost, fetchOnePost ,deletePostItem } from '../../actions/post_actions';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
    // return {
    //     post: Object.values(state.post.all),
    //     currentUser: state.session.user,
    // };

    // let postId = ownProps.match.params.postId;
    // let postId = ownProps.match.params._id;
    // let postId = ownProps.match.params.id;
    // let postId = ownProps.id;

    let currentUserId;
    if (state.session.user) {
        currentUserId = state.session.user.id;
    };

    return {
        // post: state.post[postId],
        // post: state.entities.post[postId],
        currentUserId,
        // posts: Object.values(state.entities.posts.all),
        posts: Object.values(state.entities.posts),
        // post: state.entities.posts.all[ownProps.match.params.postId],
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: () => dispatch(fetchPost()),
        fetchOnePost: (postId) => dispatch(fetchOnePost(postId)),
        deletePostItem: (postId) => dispatch(deletePostItem(postId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostShow);