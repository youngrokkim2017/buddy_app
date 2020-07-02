import React from 'react';

class RequestIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPostFromRequest(this.props.requestId);
    }

    render() {
        let post = this.props.post[this.props.idx];
        
        if (!post) return null;

        return (
            <div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default RequestIndexItem;