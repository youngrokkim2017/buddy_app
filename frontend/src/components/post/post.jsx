import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';
// import PostForm from './post_form';

class Post extends React.Component {
  constructor(props) {
    super(props);

        // this.state = {
        //     post: [],
        //     isNewestFirst: true,
        // };

        this.state = {
            title: '',
            start: '',
            destination: '',
            time: '',
            author: this.props.currentUser.firstName,
        };

        this.handleDelete = this.handleDelete.bind(this);
        // this.toggleSortDate = this.toggleSortDate.bind(this);
        // this.handleAlphaSort = this.handleAlphaSort.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidUpdate(prevProps) {
    //     // if (nextProps.currentUser === true) {
    //     if (prevProps.currentUser === false) {
    //         this.props.history.push('/');
    //     }
    // }

    // MAP PROPS
    // static defaultProps = {
    //     center: {
    //       lat: 59.95,
    //       lng: 30.33
    //     },
    //     zoom: 11
    // };    

    // componentWillMount() {
    componentDidMount() {
        this.props.fetchPost();

        // if ("geolocation" in navigator) {
        //     console.log("Available");
        // } else {
        //     console.log("Not Available");
        // }

        // navigator.geolocation.getCurrentPosition(function (position) {
        //     console.log("Latitude is :", position.coords.latitude);
        //     console.log("Longitude is :", position.coords.longitude);
        // });

        ///////////////// GEOLOCATION///////////////////////////////////////////
        // navigator.geolocation.getCurrentPosition(
        //     function (position) {
        //         console.log(position)
        //     },
        //     function (error) {
        //             console.error("Error Code = " + error.code + " - " + error.message);
        //     }
        // );
        ////////////////////////////////////////////////////////////////////////
    }

    // componentDidUpdate(prevProps, prevState) {
    //   if (this.props.location.pathname !== prevProps.location.pathname) {
    //     this.props.fetchPost();
    //   }
    // }

    // componentWillReceiveProps(newState) {
    // componentDidUpdate(prevState) {
    //     // this.setState({ post: newState.post });
    //     this.setState({ post: prevState.post });
    // }

    handleDelete() {
      this.props.deletePostItem(this.props.match.params.postId)
        .then(this.props.history.push('/posts'))
    };

    this.handleDelete = this.handleDelete.bind(this);
    // this.toggleSortDate = this.toggleSortDate.bind(this);
    // this.handleAlphaSort = this.handleAlphaSort.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //     // if (nextProps.currentUser === true) {
  //     if (prevProps.currentUser === false) {
  //         this.props.history.push('/');
  //     }
  // }

  // MAP PROPS
  // static defaultProps = {
  //     center: {
  //       lat: 59.95,
  //       lng: 30.33
  //     },
  //     zoom: 11
  // };    

  // componentWillMount() {
  componentDidMount() {
    this.props.fetchPost();

    // if ("geolocation" in navigator) {
    //     console.log("Available");
    // } else {
    //     console.log("Not Available");
    // }

    // navigator.geolocation.getCurrentPosition(function (position) {
    //     console.log("Latitude is :", position.coords.latitude);
    //     console.log("Longitude is :", position.coords.longitude);
    // });

    ///////////////////////////////// POST FORM ///////////////////////////////
    handleSubmit(e) {
        // e.preventDefault();

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
            author: this.props.currentUser.firstName,
        });

        this.props.history.push('/post');
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }
    ///////////////////////////////// POST FORM ///////////////////////////////


    render() {
        // console.log(this.state);
        // console.log(this.props);
        // console.log(this.props.match.params);
        // console.log(this.props.post);

        // const { post } = this.state;

        // this.props.post.map(p => {
        //   console.log(p.user)
        // })

        if (this.props.post.length === 0) {
            return (
                <div>
                    There is no Post
                </div>
            );
        } else {
            return (
              <div className="border-l border-r border-gray-300">
                {/* POST FORM */}
                <h1 className="text-3xl font-medium mb-4">Create Post</h1>

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
                          <label>Author</label>
                          <input
                              type="textarea"
                              value={this.props.currentUser.firstName}
                              onChange={this.update('author')}
                              // placeholder={this.props.currentUser.firstName} 
                          />
                          <br/>
                          <input type="submit" value="Submit"/>
                      </div>
                  </form>
                </div>

                <div className="flex border-gray-300 border-b p-6">
            <div className="flex-grow">
              <h1 className="text-2xl font-medium">Home</h1>
            </div>
            <div className="relative text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 0">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
              </div>
              <input className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 pl-10 placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:placeholder-gray-400" type="search" placeholder="Search" />
            </div>
          </div>

                <div className="feed">
                  {this.props.post.map((p, idx) => (
                    <PostIndexItem
                      // // key={p._id}
                      key={idx}
                      idx={idx}
                      postId={p._id}
                      title={p.title}
                      start={p.start}
                      destination={p.destination}
                      time={p.time}
                      // description={p.description}
                      // user={p.firstName}
                      author={p.author}
                      date={p.date}
                    />
                  ))}
                  {/* <div className="post-delete-button-container">
                    <button className="delete-post" onClick={this.handleDelete}>Delete Post</button>
                  </div> */}

            {/* {
                    this.props.post.map(p => {
                      p.user === this.props.currentUser.id ? 
                      <button>edit</button> 
                      :
                      ""
                    })
                  } */}
          </div>

        </div>
      );
    }
  }
}

export default withRouter(Post);


// MAP EXAMPLE
                // <div style={{ height: '100vh', width: '100%' }}>
                //     <GoogleMapReact
                //     bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                //     defaultCenter={this.props.center}
                //     defaultZoom={this.props.zoom}
                //     >
                //     <AnyReactComponent
                //         lat={59.955413}
                //         lng={30.337844}
                //         text="My Marker"
                //     />
                //     </GoogleMapReact>
                // </div> 