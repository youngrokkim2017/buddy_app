import React from 'react';

class PostEditForm extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchOnePost(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                edit post form
            </div>
        )
    }
}

export default PostEditForm;