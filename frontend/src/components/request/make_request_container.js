import { connect } from 'react-redux';
import { sendRequest, deleteRequest } from '../../actions/request_actions';
import MakeRequest from './make_request';

const mapStateToProps = (state) => ({
    requester: state.session.user.id
});

const mapDispatchToProps = (dispatch) => ({
    request: postId => dispatch(sendRequest(postId)),
    deleteRequest: requestId => dispatch(deleteRequest(requestId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MakeRequest);