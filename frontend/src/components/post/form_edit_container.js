import React from 'react';
import { connect } from 'react-redux';

import Form from './form';
import { fetchOnePost, editPost } from '../../actions/post_actions';

class EditForm extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchOnePost(this.props.match.params.id)
  }

  render() {
    if (!this.props.form) return null;
    
    return(
      <div>
        <Form 
          header={this.props.header}
          form={this.props.form} 
          formType={this.props.formType}
          currentUserId={this.props.currentUserId}
          action={this.props.action}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let postId = ownProps.match.params.id;
  return {
    form: state.entities.posts[postId],
    formType: "Update",
    header:"update your post",
    currentUserId: state.session.user.id,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    action: (data) => dispatch(editPost(data)),
    fetchOnePost: (id) => dispatch(fetchOnePost(id)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);