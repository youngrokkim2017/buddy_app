import React from 'react';
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchOnePost(this.props.postId);
    // }

    handleDelete(e) {
        // handleDelete = () => {
        // this.props.deletePostItem(this.props.match.params.postId)
        //     .then(this.props.history.push('/posts'))
        e.preventDefault();

        this.props.deletePostItem(this.props.postId);
    };

    isNew() {
        var seconds = 60;
        var s = 1000;
        var now = new Date();
        var postTime = new Date(this.props.date);
        var diffTime = Math.round(Math.abs(now.getTime() - postTime.getTime()));
        if (diffTime < 15 * seconds * s) {
            return <span className="self-center rounded-full bg-pink-500 text-white px-2 py-1 text-xs font-bold">New</span>;
        }
    };
    
    render() {
        return (
            <Link to={'/post/:postId'}>
                <div className="p-6 border-b border-gray-300 flex flex-wrap hover:text-blue-600">
                    <div className="h-16 w-16 bg-indigo-500 rounded-full mr-4 mb-4 flex flex-shrink-0 items-center justify-center">
                        <h1 className="text-3xl text-white text-center">KA</h1>
                    </div>
                    <div className="flex-1 md:flex-grow">
                        <div className="flex flex-wrap">
                            <h1 className="mr-1 text-xl">Kamran Ahmed</h1>
                            {this.isNew()}
                        </div>
                        <div className="flex flex-wrap items-center text-2xl">
                            <h1 className="mr-1">{this.props.start}</h1>
                            <svg className="mr-1 fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" /></svg>
                            <h1 className="capitalize">{this.props.destination}</h1>
                        </div>
                        <div className="flex flex-wrap items-center text-xl">
                            <h1 className="mr-1">{this.props.time}</h1>
                            <span className="mr-1">•</span>
                            <h1 className="capitalize">{this.props.title}</h1>
                        </div>
                        <div class="block md:hidden">
                            <span className="text-gray-500">2 days ago</span>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <time className="text-gray-500">2 days ago</time>
                    </div>
                </div>
            </Link>
        );
    };
};

export default PostIndexItem;

// also want to render additional info
// ie. username and datetime