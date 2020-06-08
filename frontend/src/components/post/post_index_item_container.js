import { connect } from 'react-redux';
import { fetchPost, deletePostItem } from '../../actions/post_actions';
import PostIndexItem from './post_index_item';

const mapStateToProps = (state) => {
    return {
        post: Object.values(state.post.all)
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
)(PostIndexItem);