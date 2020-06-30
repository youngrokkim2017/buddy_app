import { connect } from 'react-redux';
import { modifyRequest, deleteRequest } from '../../actions/request_actions';
import AcceptRequest from './accept_request';

const mapDispatchToProps = (dispatch) => ({
    accept: request => dispatch(modifyRequest(request)),
    deleteRequest: requestId => dispatch(deleteRequest(requestId)),
});

export default connect(
    null,
    mapDispatchToProps,
)(AcceptRequest);