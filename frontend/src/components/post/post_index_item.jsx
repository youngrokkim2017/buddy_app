import React from 'react';
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.handleDelete = this.handleDelete.bind(this);
    // }

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

    isNew(){
        // var hrs = 24;
        // var mins = 60;
        var seconds = 60;
        var s = 1000;
        // var oneDay = hrs*mins*seconds*s;
        var now = new Date();
        var postTime = new Date(this.props.date);
        var diffTime = Math.round(Math.abs(now.getTime()-postTime.getTime()));
        if (diffTime < 15*seconds*s){
           return <span className='new bg-pink-500 text-white font-medium text-xs px-2 rounded-full'>New</span>;
        }

        // this.props.createdtime.getTime();
    };

    render() {
        return (
            <Link to={'/post/:postId'}>
            <div className="mb-8 rounded-lg p-6 clearfix bg-white shadow-lg hover:bg-gray-100">
                <div className="h-full float-right text-right">
                    <h3 className="text-gray-500">{this.props.time}</h3>
                    {/* <button className="delete-post" onClick={this.handleDelete}>
                        <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" /></svg>
                    </button> */}
                </div>
                <div className="flex">
                    <img className="h-12 w-12 mr-4 block rounded-full shadow-lg" src={"https://randomuser.me/api/portraits/men/"+Math.floor(Math.random()*50).toString()+".jpg"} alt="" />
                    <div className="text-left">
                        {this.isNew()}
                        <h3 className="align-middle text-lg text-black font-medium leading-tight capitalize">Kamran Ahmed</h3>
                        <div className="leading-none text-2xl text-black">
                            <h3 className="inline-block leading-none align-middle mr-1 ">{this.props.start}</h3>
                            <svg className="inline-block align-middle mr-1 stroke-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" /></svg>
                            <h3 className="inline-block leading-none align-middle capitalize">{this.props.destination}</h3>
                        </div>
                        <h3 className="text-black text-lg truncate capitalize">{this.props.title}</h3>
                    </div>
                </div>
            </div>
            </Link>
        );
    };
};

export default PostIndexItem;

// also want to render additional info
// ie. username and datetime