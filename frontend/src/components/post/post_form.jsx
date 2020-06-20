import React from 'react';
// import Autocomplete from 'react-google-autocomplete';

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        let fullName = this.props.currentUser.firstName + ' ' + this.props.currentUser.lastName;

        this.state = {
            title: '',
            start: '',
            destination: '',
            time: '',
            // description: '',
            // author: this.props.currentUser.firstName,
            author: fullName,
            // newPost: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidUpdate(prevProps) {
    //     // if (nextProps.currentUser === true) {
    //     if (prevProps.currentUser === false) {
    //         this.props.history.push('/');
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    // componentDidUpdate(prevProps) {
    //     // this.setState({ newPost: nextProps.newPost.title });
    //     // this.setState({ newPost: prevProps.newPost.title });
    // }

    handleSubmit(e) {
        e.preventDefault();

        let fullName = this.props.currentUser.firstName + ' ' + this.props.currentUser.lastName;

        let post = {
            title: this.state.title,
            start: this.state.start,
            destination: this.state.destination,
            time: this.state.time,
            // description: this.state.description,
            author: this.state.author,
        };

        this.props.composePost(post);
        this.setState({
            title: '',
            start: '',
            destination: '',
            time: '',
            // description: '',
            // author: this.props.currentUser.firstName,
            author: fullName,
        });

        this.props.history.push('/post');
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    render() {
        console.log(this.props);

        return (
            <div className="flex overflow-hidden mx-auto w-full lg:mx-0 lg:w-3/5">
            <div className="flex-grow overflow-y-scroll">
            <div className="border-l border-r border-gray-300 h-screen">
                <div className="p-6 pb-6">

                    <h1 className="text-2xl font-medium mb-4">Create an activity</h1>

                    <form onSubmit={this.handleSubmit}>
                        <div className="w-full">

                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2 mb-6 pr-3">
                                    <label className="font-medium mb-2">
                                        Start
                                    </label>
                                    <input
                                        type="textarea"
                                        value={this.state.start}
                                        onChange={this.update('start')}
                                        placeholder="UC Berkeley"
                                        className="block bg-gray-100 w-full border border-gray-300 rounded-lg py-2 px-4 placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:placeholder-gray-400"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 mb-6 pr-3">
                                    <label className="font-medium mb-2">
                                        End
                                    </label>
                                    <input
                                        type="textarea"
                                        value={this.state.destination}
                                        onChange={this.update('destination')}
                                        placeholder="Telegraph and Dwight"
                                        className="block bg-gray-100 w-full border border-gray-300 rounded-lg py-2 px-4 placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <div class="flex flex-wrap">
                                <div className="w-full md:w-1/2 mb-6 pr-3">
                                    <label className="font-medium mb-2">
                                        Title
                                    </label>
                                    <input
                                        type="textarea"
                                        value={this.state.title}
                                        onChange={this.update('title')}
                                        placeholder="Going home"
                                        className="block bg-gray-100 w-full border border-gray-300 rounded-lg py-2 px-4 placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:placeholder-gray-400"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 mb-6 pr-3">
                                    <label className="font-medium mb-2">
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        value={this.state.time}
                                        onChange={this.update('time')}
                                        placeholder="6:00 pm"
                                        className="block bg-gray-100 w-full border border-gray-300 rounded-lg py-2 px-4 placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:placeholder-gray-400"
                                    />
                                </div>
                            </div>
                            <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
                        </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
        );
    }
};

export default PostForm;