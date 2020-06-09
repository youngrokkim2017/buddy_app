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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="textarea"
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder="Title"
                        />
                        <br/>
                        <input
                            type="textarea"
                            value={this.state.start}
                            onChange={this.update('start')}
                            placeholder="Start"
                        />
                        <br />
                        <input
                            type="textarea"
                            value={this.state.destination}
                            onChange={this.update('destination')}
                            placeholder="Destination"
                        />
                        <br/>
                        <input
                            type="textarea"
                            value={this.state.time}
                            onChange={this.update('time')}
                            placeholder="Time"
                        />
                        <br/>
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