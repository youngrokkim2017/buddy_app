import { connect } from 'react-redux';
import { fetchPost, deletePostItem } from '../../actions/post_actions';
import Post from './post';

const mapStateToProps = (state) => {
    return {
        post: Object.values(state.post.all),
        // post: Object.values(state.entities.posts),
        currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: () => dispatch(fetchPost()),
        deletePostItem: (postId) => dispatch(deletePostItem(postId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);