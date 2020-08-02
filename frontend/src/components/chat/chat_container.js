import { connect } from 'react-redux';
import { fetchChats, fetchChatMembers } from '../../actions/chat_actions';
import { receiveListener, receiveEmit, receiveRoom, receiveExitRoom } from '../../actions/socket_actions';
import Chat from './chat';
// import { fetchAUser } from '../../util/user_api_util';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        chats: state.entities.chats,
        users: Object.values(state.entities.users),
        // need sockets
        socket: state.entities.chats,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // chat actions
        fetchChats: postId => dispatch(fetchChats(postId)),
        fetchChatMembers: postId => dispatch(fetchChatMembers(postId)),
        // socket actions
        receiveListener: listener => dispatch(receiveListener(listener)),
        receiveEmit: emit => dispatch(receiveEmit(emit)),
        receiveRoom: room => dispatch(receiveRoom(room)),
        receiveExitRoom: room => dispatch(receiveExitRoom(room)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Chat);