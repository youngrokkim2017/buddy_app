import React from 'react';
import RequestIndexItem from './request_index_item';
// import RequestIndexItemContainer from './request_index_item_container';

class RequestIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserRequests();
    }

    render() {
        // console.log(this.props);

        let request = this.props.requests.map((req, idx) => {
            return (
                <RequestIndexItem 
                    key={idx}
                    idx={idx}
                    requestId={request._id}
                    // status={request.status}
                    postId={request.post}
                />
            )
        })

        return (
            <div>
                <div>
                    {request}
                </div>
            </div>
        )
    }
}

export default RequestIndex;