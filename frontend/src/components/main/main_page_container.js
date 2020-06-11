import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';
import MainPage from './main_page';

const mapStateToProps = (state) => {
    return {
        // post: Object.values(state.post.all)
        post: Object.values(state.post)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: () => dispatch(fetchPost())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);