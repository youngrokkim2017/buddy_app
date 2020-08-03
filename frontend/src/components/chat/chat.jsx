import React from 'react';
import { withRouter } from 'react-router-dom';

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chat: [],
        };
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

    render() {
        return (
            <div>

            </div>
        )
    }
}

// export default Chat;
export default withRouter(Chat);