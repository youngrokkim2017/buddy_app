import React from 'react';
import { Link } from 'react-router-dom';
// import PostIndexItem from './post_index_item';

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.post;

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.handleMessage = this.handleMessage.bind(this);
    }

    componentDidMount() {
        // this.props.fetchOnePost(this.props.match.params.postId);
        this.props.fetchOnePost(this.props.match.params.id);
        // this.props.fetchOnePost(this.props.postId);

        // this.props.fetchPosts();
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.location.pathname !== prevProps.location.pathname) {
    //         this.props.fetchOnePost(this.props.match.params.id);
    //     }
    // }

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

    timeAgo(x, badge = false) {
        let locales = {
            prefix: '',
            sufix: ' ago',
            seconds: 'just now',
            minute: 'a min',
            minutes: '%d min',
            hour: 'an hour',
            hours: '%d hours',
            day: 'a day',
            days: '%d days',
            month: 'a month',
            months: '%d months',
            year: 'a yr',
            years: '%d yrs'
        },
            seconds = Math.floor((new Date() - new Date(x)) / 1000),
            words = locales.prefix,
            interval = 0,
            intervals = {
                year: seconds / 31536000,
                month: seconds / 2592000,
                day: seconds / 86400,
                hour: seconds / 3600,
                minute: seconds / 60
            },
            distance = locales.seconds;

        for (let key in intervals) {
            interval = Math.floor(intervals[key]);

            if (interval > 1) {
                distance = locales[key + 's'];
                break;
            } else if (interval === 1) {
                distance = locales[key];
                break;
            }
        };

        distance = distance.replace(/%d/i, interval);
        words += distance;
        if (distance !== locales.seconds) {
            words += locales.sufix;
        }

        let parsed = words.trim();
        if (badge === false) {
            return parsed;
        } else if (seconds < 60 * 15) {
            let recent = <span className="self-center rounded bg-pink-500 text-white px-2 text-xs font-bold">New</span>;
            return recent;
        }
    };

    render() {
        console.log(this.props);

        if (this.props.post === undefined) return null;
        // let { post } = this.props;

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
                                {/* This is the post show route */}
                                <div>
                                    {/* <div className="p-6 border-b border-gray-300 flex flex-wrap hover:text-blue-600"> */}
                                    <div className="p-6 border-b border-gray-300 flex flex-wrap">
                                        <div className="h-16 w-16 bg-gray-500 rounded-full mr-4 mb-4 flex flex-shrink-0 items-center justify-center">
                                            <h1 className="text-3xl text-white text-center">{this.props.post.author.split(" ").map((n, i, a) => i === 0 || i + 1 === a.length ? n[0] : null).join("")}</h1>
                                        </div>
                                        <div className="flex-1 md:flex-grow">
                                            <div className="flex flex-wrap">
                                                <h1 className="mr-1 text-xl">{this.props.post.author}</h1>
                                                {this.timeAgo(this.props.post.date, true)}
                                            </div>
                                            <div className="flex flex-wrap items-center text-2xl">
                                                <h1 className="mr-1">{this.props.post.start.split(",")[0]}</h1>
                                                <svg className="mr-1 fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" /></svg>
                                                <h1 className="capitalize">{this.props.post.destination.split(",")[0]}</h1>
                                            </div>
                                            <div className="flex flex-wrap items-center text-xl">
                                                <h1 className="mr-1">{this.props.post.time}</h1>
                                                <span className="mr-1">•</span>
                                                <h1 className="capitalize">{this.props.post.title}</h1>
                                            </div>
                                            <div className="block md:hidden">
                                                <span className="text-gray-500">{this.timeAgo(this.props.post.date)}</span>
                                            </div>
                                        </div>
                                        <div className="hidden md:block">
                                            <span className="text-gray-500">{this.timeAgo(this.props.post.date)}</span>
                                        </div>

                                        {/* follow function */}
                                        <div>
                                            {/* <button>follow</button> */}
                                        </div>
                                    </div>
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