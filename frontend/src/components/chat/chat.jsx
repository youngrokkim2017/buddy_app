import React from 'react';
import { withRouter } from 'react-router-dom';

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chat: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.receiveRoom(this.props.match.params.postId);
        this.props.fetchChatMembers(this.props.match.params.postId);
        this.props.fetchChats(this.props.match.params.postId)
            .then(res => {
                this.setState({
                    chat: this.props.chats.map(chat => (
                        <div>
                            <div>
                                {chat.content}
                            </div>
                        </div>
                    ))
                })
            })
    }

    componentWillUnmount() {
        console.log('chat has unmounted');

        this.props.receiveExitRoom(this.props.match.params.postId);
    }

    handleSubmit(e) {
        e.preventDefault();

        const input = document.getElementById('chat-input')

        let messageInfo = {
            room: this.props.match.params.postId,
            user: this.props.currentUser,
            content: input.value,
        };

        input.value = '';

        let messageEmission = {
            actions: 'sendMessage',
            value: messageInfo,
        };

        this.props.receiveEmit(messageEmission);
    }

    render() {
        let title = "";

        if (this.props.users.length === 2) {
            title = this.props.users[0]._id === this.props.currentUser.id ? this.props.users[1].firstName : this.props.users[0].firstName
        }

        return (
            <div className="chat-container">
                <div className="chat-header">
                    {title}
                </div>
                <div className="chat-output">
                    {this.state.chat}
                </div>

                <form className="chat-box">
                    <input 
                        type="text"
                        id="chat-input"
                        placeholder="Message"
                    />
                    <button className="small main button" onClick={this.handleSubmit}>
                        Send
                    </button>
                </form>
            </div>
        )
    }
}

// export default Chat;
export default withRouter(Chat);