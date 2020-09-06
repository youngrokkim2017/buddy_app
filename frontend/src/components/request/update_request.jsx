import React from 'react';

class UpdateRequest extends React.Component {
    constructor(props) {
        super(props);

        this.handleAccept = this.handleAccept.bind(this);
        this.handleReject = this.handleReject.bind(this);
    }

    handleAccept(e) {
        e.preventDefault();

        let accept = {
            id: this.props.request._id,
            // status: "accepted",
        }
    }

    handleReject(e) {
        e.preventDefault();

        this.props.deleteRequest(this.props.request._id);
    }

    render() {
        return (
            <div>
                <form>
                    <button
                        onClick={this.handleAccept}
                    >
                        Accept
                    </button>
                    <button
                        onClick={this.handleReject}
                    >
                        Decline
                    </button>
                </form>
            </div>
        )
    }
};

export default UpdateRequest;