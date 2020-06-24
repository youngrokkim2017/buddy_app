import React from 'react';
import { Link } from 'react-router-dom';
// import PostIndexItem from './post_index_item';

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.handleMessage = this.handleMessage.bind(this);
    }

    componentDidMount() {
        // this.props.fetchOnePost(this.props.match.params.postId);
        this.props.fetchOnePost(this.props.match.params.id);
        // this.props.fetchOnePost(this.props.postId);

        // this.props.fetchPost();
    }

    handleDelete(e) {
        e.preventDefault();

        // this.props.deletePostItem(this.props.match.params.postId)
        //     .then(this.props.history.push('/posts'))

        this.props.deletePostItem(this.props.postId)
            .then(this.props.history.push('/posts'))
    };

    handleEdit(e) {
        e.preventDefault();
    }

    handleMessage(e) {
        e.preventDefault();
    }

    render() {
        console.log(this.props);

        // this.props.posts.map((p) => {
        //     console.log(p.user);
        // });

        // this.props.posts.map(post => {
        //     if (this.props.currentUserId === post.user) {
        //         return (
        //             <div>
        //                 hello
        //             </div>
        //         )
        //     } else {
        //         return (
        //             <div>
        //                 no post
        //             </div>
        //         )
        //     }
        // })

        return (
            <div className="flex overflow-hidden mx-auto w-full lg:mx-0 lg:w-3/5">
                <div className="flex-grow overflow-y-scroll">
                    <div className="border-l border-r border-gray-300 h-screen">
                        <div className="p-6 pb-6">
                            <div>
                                <Link to='/post'>
                                    <button>Back</button>
                                </Link>
                            </div>

                            <br />
                            <div>
                                This is the post show route
                                <div>
                                    {/* {   this.props.posts.map(post => {
                                if (this.props.currentUserId === post.user) {
                                    <div>
                                        hello
                                    </div>
                                } else {
                                    <div>

                                    </div>
                                }
                            })
                        } */}
                                </div>
                            </div>
                            <br />

                            <div>
                                <button onClick={this.handleMessage}>Message</button>
                            </div>
                            <div>
                                <button onClick={this.handleEdit}>Edit</button>
                            </div>
                            <div>
                                {/* <button className="delete-post" onClick={this.handleDelete}>Delete</button> */}
                                {/* { this.props.currentUserId === post.userId ?  */}
                                <button
                                    className="delete-post"
                                    onClick={this.handleDelete}>Delete
                        </button>

                                {/* :

                        ""
                    } */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostShow;