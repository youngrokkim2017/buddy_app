import React from 'react';
import { withRouter } from 'react-router-dom';

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chat: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
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

        let msgCallBack = (message) => {
            this.setState({
                chat: this.state.chat.concat([
                    <div>
                        {/* user image */}
                        <p>{message.user}</p>
                        <p>{message.content}</p>
                    </div>
                ])
            })
        }

        let messageListener = { action: 'sendMessage', callback: msgCallBack }

        this.props.receiveListener(messageListener);
    }

    componentWillUnmount() {
        console.log('chat has unmounted');

        this.props.receiveExitRoom(this.props.match.params.postId);
    }

    handleBack(e) {
        e.preventDefault();

        this.props.history.goBack();
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
        console.log(this.props);

        let title = "";

        if (this.props.users.length === 2) {
            title = this.props.users[0]._id === this.props.currentUser.id ? this.props.users[1].firstName : this.props.users[0].firstName
        }

        return (
            <div className="chat-container">
                <div className="chat-header">
                    {/* <p>{title}</p> */}
                    <div>{title}</div>
                    <div>
                        <button onClick={this.handleBack}>CLOSE</button>
                    </div>
                </div>
                <div className="chat-output">
                    {this.state.chat}
                </div>

                <form className="chat-box-container">
                    <input 
                        type="text"
                        id="chat-input"
                        placeholder="Message"
                    />
                    <button className="chat-send-button" onClick={this.handleSubmit}>
                        Send
                    </button>
                </form>
            </div>
        )
    }
}

// export default Chat;
export default withRouter(Chat);