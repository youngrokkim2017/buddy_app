import React from 'react';
import { withRouter } from 'react-router-dom';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.form;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);

    this.postFormStart = React.createRef();
    this.postFormDest = React.createRef();
  }

  handleGoBack(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(payload => {
        if (payload.post) this.props.history.push(`/post/${payload.post.data._id}`)
      })
  }

  render() {
    return (
      <div className="create-post form-container">
        <h1 className="form main header">{this.props.header}</h1>
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
                            ref={this.postFormStart}
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
                            ref={this.postFormDest}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap">
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
                {/* <button 
                    className="main large button">
                    {this.props.formType}
                </button> */}
            </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);