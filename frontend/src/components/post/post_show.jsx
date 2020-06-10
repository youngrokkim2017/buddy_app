import React from 'react';

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        // this.props.fetchOnePost(this.props.match.params.postId);
        // this.props.fetchOnePost(this.props.postId);

        this.props.fetchPost();
    }

    handleDelete(e) {
        // handleDelete = () => {
        e.preventDefault();

        // this.props.deletePostItem(this.props.match.params.postId)
        //     .then(this.props.history.push('/posts'))

        this.props.deletePostItem(this.props.postId)
            .then(this.props.history.push('/posts'))
    };

    render() {
        console.log(this.state);
        console.log(this.props);

        return (
            <div className="post-show-container">
                This is the post show route
                <div>

                </div>
                <div>
                    <button className="delete-post" onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        );
    }
}

export default PostShow;