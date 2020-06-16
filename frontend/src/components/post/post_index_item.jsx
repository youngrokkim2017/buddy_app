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


    timeAgo(x) {
        let locales = {
            prefix: '',
            sufix: ' ago',
            seconds: 'just now',
            minute: 'a min',
            minutes: '%d min',
            hour: 'an hr',
            hours: '%d hrs',
            day: 'a day',
            days: '%d days',
            month: 'a month',
            months: '%d months',
            year: 'a yr',
            years: '%d yrs'
        };
        
        let seconds = Math.floor((new Date() - new Date(x)) / 1000),
            words = locales.prefix,
            interval = 0,
            intervals = {
                year: seconds / 31536000,
                month: seconds / 2592000,
                day: seconds / 86400,
                hour: seconds / 3600,
                minute: seconds / 60
            };
        let distance = locales.seconds;

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
        if (distance !== locales.seconds){
            words += locales.sufix;
        } 
        
        if (seconds < 60 * 15){
            // console.log('less than 15 mintues');
            // maybe put isNew() in here since the scaffolidng is already built
            // how to add it next to author
        }
        
        return words.trim();
    };

    isNew() {
        let seconds = 60;
        let s = 1000;
        let now = new Date();
        let postTime = new Date(this.props.date);
        let diffTime = Math.round(Math.abs(now.getTime() - postTime.getTime()));
        if (diffTime < 15 * seconds * s) {
            return <span className="self-center rounded-full bg-pink-500 text-white px-2 py-1 text-xs font-bold">New</span>;
        }
    };

    render() {
        return (
            <Link to={'/post/:postId'}>
                <div className="p-6 border-b border-gray-300 flex flex-wrap hover:text-blue-600">
                    <div className="h-16 w-16 bg-indigo-500 rounded-full mr-4 mb-4 flex flex-shrink-0 items-center justify-center">
                        <h1 className="text-3xl text-white text-center">{this.props.author.split("")[0]}</h1>
                    </div>
                    <div className="flex-1 md:flex-grow">
                        <div className="flex flex-wrap">
                            <h1 className="mr-1 text-xl">{this.props.author}</h1>
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
                        <div className="block md:hidden">
                            <span className="text-gray-500">{this.timeAgo(this.props.date)}</span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-gray-500">{this.timeAgo(this.props.date)}</span>
                    </div>
                </div>
            </Link>
        );
    };
};

export default PostIndexItem;

// also want to render additional info
// ie. username and datetime