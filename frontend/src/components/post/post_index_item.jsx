import React from 'react';

class PostIndexItem extends React.Component {
    render() {
        // table sorting
        
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h3>{this.props.start}</h3>
                <h3>{this.props.destination}</h3>
                <h3>{this.props.time}</h3>
                <h3>{this.props.description}</h3>
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
        );
    };
};

export default PostIndexItem;

// also want to render additional info
// ie. username and datetime