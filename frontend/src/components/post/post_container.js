import { connect } from 'react-redux';
import { fetchPosts, deletePostItem, composePost } from '../../actions/post_actions';
import Post from './post';

const mapStateToProps = (state) => {
    return {
        // posts: Object.values(state.posts.all),
        posts: Object.values(state.entities.posts.all),
        // posts: state.entities.posts.all && Object.values(state.entities.posts.all),
        currentUser: state.session.user,
        // // newPost: state.post.new,
        // newPost: state.posts.new,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        deletePostItem: (postId) => dispatch(deletePostItem(postId)),
        composePost: data => dispatch(composePost(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);