import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.entities.posts.all),
        currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        // fetchSearchedPosts: (query) => dispatch(fetchSearchedPosts(query)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);