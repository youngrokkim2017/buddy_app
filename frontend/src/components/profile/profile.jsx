import React from 'react';
import PostIndexItem from '../post/post_index_item';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: []
        }

        this.handleBackToPreviousPage = this.handleBackToPreviousPage.bind(this);

        this.logoutUser = this.logoutUser.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
    }

    // componentWillMount() {
    componentDidMount() {
        // console.log(this.props.currentUser.id);
        this.props.fetchUserPost(this.props.currentUser.id);
    }

    handleBackToPreviousPage(e) {
        e.preventDefault();

        this.props.history.goBack();
    }

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

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();

        this.props.history.push('/');
    };

    render() {
        console.log(this.props);

        if (this.props.post.length === 0) {
            return (
                <div>
                    {this.props.currentUser.firstName} {this.props.currentUser.lastName} Has No Posts
                </div>
            );
        } else {
            return (
                <div className="flex overflow-hidden mx-auto w-full lg:mx-0 lg:w-3/5">
                    <div className="flex-grow overflow-y-scroll">
                        <div className="border-l border-r border-gray-300 h-screen">
                            <div className="flex border-gray-300 border-b p-6">
                                <div className="flex-grow mr-4">
                                    <h1 className="text-2xl font-medium">
                                        {/* <h2>{this.props.currentUser.firstName} {this.props.currentUser.lastName}'s Posts</h2> */}
                                        {this.props.currentUser.firstName} {this.props.currentUser.lastName}'s Posts
                                    </h1>
                                </div>
                                <button onClick={this.logoutUser}>Log Out</button>
                            </div>
                           
                            {/* <button className="relative bottom-0 mt-8 text-gray-600 text-lg ml-2 hidden lg:block" onClick={this.logoutUser}>Log Out</button> */}
                            <div className="feed pb-12 lg:pb-0">
                            {this.props.post.map(m => (
                                <PostIndexItem
                                    key={m._id}
                                    title={m.title}
                                    start={m.start}
                                    destination={m.destination}
                                    time={m.time}
                                    date={m.date}
                                    authorId={m.user}
                                    author={m.author}
                                />
                            ))}
                            </div>
                            {/* {this.props.post.map((p, idx) => (
                        <PostIndexItem
                            key={idx}
                            idx={idx}
                            postId={p._id}
                            title={p.title}
                            start={p.start}
                            destination={p.destination}
                            time={p.time}
                            author={p.author}
                            date={p.date}
                        />
                    ))} */}

                        </div>
                    </div>
                </div>
            );
        };
    }
}

export default Profile;