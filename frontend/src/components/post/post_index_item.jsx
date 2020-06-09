import React from 'react';

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

    render() {
        // console.log(this.props.postId);
        console.log(this.props);

        return (
            <div className="shadow-lg mb-4 bg-white rounded-lg p-6">
                <div className="text-left">
                    <h3 className="text-xl">{this.props.title}</h3>
                    <h3 className="text-blue-500">{this.props.start}</h3>
                    <p className="text-xl">→</p>
                    <h3 className="">{this.props.destination}</h3>
                    <h3 className="">{this.props.time}</h3>
                    {/* <h3 className="">{this.props.description}</h3> */}
                    {/* <h3>{this.props.user}</h3> */}
                    {/* <table>
                        <thead></thead>
                        <tr>
                            <th>{this.props.title}</th>
                            <th>{this.props.start}</th>
                            <th>{this.props.destination}</th>
                            <th>{this.props.time}</th>
                            <th>{this.props.description}</th>
                        </tr>
                    </table> */}
                </div>
                <div>
                    <div className="post-delete-button-container">
                        <button className="delete-post" onClick={this.handleDelete}>Edit</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default PostIndexItem;

// also want to render additional info
// ie. username and datetime