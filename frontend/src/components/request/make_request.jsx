import React from 'react';

class MakeRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            requester: this.props.requester,
            loading: true,
            sending: false,
            cancelling: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePending = this.handlePending.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            sending: true,
        });

        this.props.sendRequest(this.props.post.id)
            .then(this.setState({ sending: false }))
    }

    handlePending(e) {
        e.preventDefault();

        this.setState({
            cancelling: true,
        });

        this.props.deleteRequest(this.props.request._id)
            .then(this.setState({ cancelling: false }))
    }

    render() {
        if (!this.props) return null;
        return (
            <div>
                <form>
                    <input type="hidden" value={this.props.requester}/>
                    <input type="hidden" value={this.state.post}/>
                    <button
                        className={
                            this.state.sending ? 
                                "button"
                            :
                                "hidden"
                        }
                    >
                        Sending
                    </button>
                    <button
                        className={
                            this.state.cancelling ? 
                                'button'
                            :
                                "hidden"
                        }
                    >
                        Cancelling
                    </button>
                    <button
                        active className={
                            this.props.requested ?
                                'hidden'
                            :
                                "button"
                        }
                        id={`request-button${this.props.post}`}
                        onClick={this.handleSubmit}
                    >
                        Join
                    </button>
                    <button
                        active className={
                            this.props.requested ?
                                'button'
                            :
                                'hidden'
                        }
                        id={`pending-button${this.props.post}`}
                        onClick={this.handlePending}
                    >
                        Pending
                    </button>
                </form>
            </div>
        )
    }
};

export default MakeRequest;