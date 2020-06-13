import React from 'react';
// import Autocomplete from 'react-google-autocomplete';

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            start: '',
            destination: '',
            time: '',
            description: '',
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

        let post = {
            title: this.state.title,
            start: this.state.start,
            destination: this.state.destination,
            time: this.state.time,
            description: this.state.description,
        };

        this.props.composePost(post);
        this.setState({
            title: '',
            start: '',
            destination: '',
            time: '',
            description: '',
        });

        this.props.history.push('/post');
    }

    update(type) {
        return e => this.setState({
            // text: e.currentTarget.value
            // title: e.currentTarget.value
            [type]: e.currentTarget.value
        });
    }

    render() {
        // console.log(this.state);
        console.log(this.props);

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input 
                            type="textarea"
                            value={this.state.title}
                            onChange={this.update('title')}
                            // placeholder="Title"
                            placeholder="e.g. Going home"
                        />
                        <br/>
                        <label>Start</label>
                        <input
                            type="textarea"
                            value={this.state.start}
                            onChange={this.update('start')}
                            // placeholder="Start"
                            placeholder="e.g. UC Berkeley"
                        />
                        <br />
                        <label>Destination</label>
                        <input
                            type="textarea"
                            value={this.state.destination}
                            onChange={this.update('destination')}
                            // placeholder="Destination"
                            placeholder="e.g. Telegraph and Dwight"
                        />
                        <br/>
                        <label>Time</label>
                        <input
                            type="textarea"
                            value={this.state.time}
                            onChange={this.update('time')}
                            // placeholder="Time"
                            placeholder="e.g. 6:00 pm"
                        />
                        <br/>
                        <label>Description</label>
                         <input
                            type="textarea"
                            value={this.state.description}
                            onChange={this.update('description')}
                            placeholder="Description"
                        />
                        <br/>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
                <br/>
                {/* <PostIndexItem text={this.state.newPost} /> */}
            </div>
        );
    }
};

export default PostForm;