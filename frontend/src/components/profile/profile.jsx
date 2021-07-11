import React from 'react';
import PostIndexItem from '../post/post_index_item';
import { Link } from 'react-router-dom'

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: []
        }

        this.handleBackToPreviousPage = this.handleBackToPreviousPage.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.logoutUser = this.logoutUser.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
    }

    // componentWillMount() {
    componentDidMount() {
        this.props.fetchUserPost(this.props.currentUser.id);
    }

    handleBackToPreviousPage(e) {
        e.preventDefault();

        this.props.history.goBack();
    }

    // handleFollowUser() {
    //     fetch('/follow', {
    //         method: "put",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + localStorage.getItem('jwt')
    //         },
    //         body: JSOON.stringify({
    //             followId: this.props.props.user
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // }

    deleteButton() {
        if (this.props.post.user === this.props.currentUserId) {
            return (
                <div>
                    <button onClick={this.handleDelete}>
                        Delete
                    </button>
                </div>
            )
        }
    }

    handleDelete() {
        // e.preventDefault();
        this.props.deletePostItem(this.props.post._id)
            .then(this.props.history.push('/post'))
    }

    handleEdit() {
        // handleEdit(e) {
        // e.preventDefault();

        if (this.props.post.user === this.props.currentUserId) {
            return (
                <div>
                    <Link to={`/post/${this.props.post._id}/edit`}>
                        <button>
                            Edit
                        </button>
                    </Link>
                </div>
            )
        }
    }

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
                            {this.props.post.map(p => (
                                <PostIndexItem
                                    key={p._id}
                                    title={p.title}
                                    start={p.start}
                                    destination={p.destination}
                                    time={p.time}
                                    date={p.date}
                                    authorId={p.user}
                                    author={p.author}
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