import { connect } from 'react-redux';
import { modifyRequest, deleteRequest } from '../../actions/request_actions';
import UpdateRequest from './update_request';

// const mapStateToProps = (state) => ({

// });

const mapDispatchToProps = (dispatch) => ({
    update: request => dispatch(modifyRequest(request)),
    deleteRequest: requestId => dispatch(deleteRequest(requestId)),
});

export default connect(
    null, 
    mapDispatchToProps,
)(UpdateRequest);