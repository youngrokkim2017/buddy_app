import { connect } from 'react-redux';
// import { fetchOnePost, receivePostErrors, editPost } from '../../actions/post_actions';
import { fetchOnePost, editPost } from '../../actions/post_actions';
import PostEditForm from './post_edit_form';

const mapStateToProps = (state, ownProps) => {
    let postId = ownProps.match.params.id;

    return {
        postId,
        post: state.entities.posts[postId],
        currentUser: state.session.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editPost: (data) => dispatch(editPost(data)),
        fetchOnePost: (id) => dispatch(fetchOnePost(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PostEditForm);