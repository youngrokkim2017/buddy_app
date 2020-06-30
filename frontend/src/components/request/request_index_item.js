import { connect } from 'react-redux';
import { fetchPostFromRequest } from '../../actions/post_actions';
import { deleteRequest } from '../../actions/request_actions';
import RequestIndexItem from './request_index_item';

const mapStateToProps = (state) => ({
    post: Object.values(state.entities.posts),
});

const mapDispatchToProps = (dispatch) => ({
    fetchPostFromRequest: requestId => dispatch(fetchPostFromRequest(requestId)),
    deleteRequest: id => dispatch(deleteRequest(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RequestIndexItem);