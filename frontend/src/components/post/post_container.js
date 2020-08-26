import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { fetchPosts, deletePostItem, composePost } from '../../actions/post_actions';
import Post from './post';

import { getSearchedPosts } from '../../actions/search_actions';

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
        getSearchedPosts: query => dispatch(getSearchedPosts(query)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(withRouter(Post));