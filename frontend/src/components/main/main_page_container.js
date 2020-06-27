import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import MainPage from './main_page';

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.entities.posts.all),
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