import React from 'react';
// import { withRouter } from 'react-router-dom';
import PostForm from './post_form';

class PostEditForm extends React.Component {
    // constructor(props) {
    //     super(props);
    // };

    componentDidMount() {
        this.props.fetchOnePost(this.props.match.params.id);
    }

    render() {
        console.log(this.props);

        return (
            <PostForm
                action={this.props.editPost}
                currentUser={this.props.currentUser}
            />
        )
    }
}

export default PostEditForm;
// export default withRouter(PostEditForm);