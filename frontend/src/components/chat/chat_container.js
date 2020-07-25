import { connect } from 'react-redux';
import { fetchChats } from '../../actions/chat_actions';
import Chat from './chat';
// import { fetchAUser } from '../../util/user_api_util';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        chats: state.entities.chats,
        users: Object.values(state.entities.users),
        // need sockets
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChats: postId => dispatch(fetchChats(postId))
        // need to fetch the users in the chat
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Chat);