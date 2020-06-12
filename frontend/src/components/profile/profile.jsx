import React from 'react';
import PostIndexItem from '../post/post_index_item';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: []
        }
    }

    // componentWillMount() {
    componentDidMount() {
        console.log(this.props.currentUser.id);
        this.props.fetchUserPost(this.props.currentUser.id);
    }

    // handleDelete = () => {
    handleDelete(e) {
        // this.props.deletePostItem(this.props.match.params.postId)
        //     .then(this.props.history.push('/posts'))
        e.preventDefault();

        this.props.deletePostItem(this.props.postId);
    };

    // componentWillReceiveProps(newState) {
    // componentDidUpdate(prevState) {
    //     // this.setState({ post: newState.post });
    //     this.setState({ post: prevState.post });
    // }

    render() {
        console.log(this.props);

        // if (this.state.post.length === 0) {
        if (this.props.post.length === 0) {
            return(
                <div>
                    {this.props.currentUser.handle} has no Post
                </div>
            );
        } else {
            return (
                <div>
                    <h2>All of {this.props.currentUser.firstName}'s Posts</h2>
                    {this.props.post.map(m => (
                    // {this.state.post.map(m => (
                        <PostIndexItem key={m._id} title={m.title} start={m.start} destination={m.destination} time={m.time} firstName={m.firstName} />
                    ))}
                </div>
            );
        };
    }
}

export default Profile;