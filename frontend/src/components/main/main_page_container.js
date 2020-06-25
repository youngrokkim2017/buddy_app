import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import MainPage from './main_page';

const mapStateToProps = (state) => {
    return {
        post: Object.values(state.post.all)
        // post: Object.values(state.post)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);