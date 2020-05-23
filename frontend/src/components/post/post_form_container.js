import { connect } from 'react-redux';
import { composePost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newPost: state.post.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        composePost: data => dispatch(composePost(data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostForm);