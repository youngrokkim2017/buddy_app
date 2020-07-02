import { connect } from 'react-redux';
import { fetchUserRequests } from '../../actions/request_actions';
import RequestIndex from './request_index';

const mapStateToProps = (state) => {
    return {
        requests: Object.values(state.entities.requests),
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchUserRequests: () => dispatch(fetchUserRequests()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RequestIndex);