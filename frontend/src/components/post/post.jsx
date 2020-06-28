import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';
/* global google */
// import PostForm from './post_form';

class Post extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //     post: [],
    //     isNewestFirst: true,
    // };

    let fullName = this.props.currentUser.firstName + ' ' + this.props.currentUser.lastName;

    this.state = {
      title: '',
      start: '',
      destination: '',
      time: '',
      author: fullName,
    };

    // this.handleBackToPreviousPage = this.handleBackToPreviousPage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // this.toggleSortDate = this.toggleSortDate.bind(this);
    // this.handleAlphaSort = this.handleAlphaSort.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.postFormStart = React.createRef();
    this.postFormDest = React.createRef();
  }

  // // componentDidUpdate() {
  // componentDidUpdate(nextProps) {
  // // componentWillReceiveProps(nextProps) {
  //     // // if (nextProps.currentUser === true) {
  //     // if (prevProps.currentUser === false) {
  //     //     this.props.history.push('/');
  //     // }

  //     // this.props.fetchPosts();

  //     if (this.props.location.pathname !== nextProps.location.pathname) {
  //       // this.props.fetchPosts();
  //       window.location.reload(false);
  //     }
  // }

  ////////// MAP PROPS //////////
  // static defaultProps = {
  //     center: {
  //       lat: 59.95,
  //       lng: 30.33
  //     },
  //     zoom: 11
  // };    
  //////////////////////////////

  // componentWillMount() {
  componentDidMount() {
    // console.log(this.postFormStart.current);
    // console.log("post " + this.props.post);
    // console.log("post " + this.props.post.length);
    this.props.fetchPosts();

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

    this.startAutocomplete = new google.maps.places.Autocomplete(this.postFormStart.current);
    this.destAutocomplete = new google.maps.places.Autocomplete(this.postFormDest.current);
    this.startAutocomplete.addListener('place_changed', () => {
      this.setState({
        'start': this.postFormStart.current.value
      })
    });
    this.destAutocomplete.addListener('place_changed', () => {
      this.setState({
        'destination': this.postFormDest.current.value
      })
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     this.props.fetchPosts();
  //   }
  // }

  // componentWillReceiveProps(newState) {
  // componentDidUpdate(prevState) {
  //     // this.setState({ post: newState.post });
  //     this.setState({ post: prevState.post });
  // }

  handleBackToPreviousPage(e) {
    e.preventDefault();

    this.props.history.goBack();
  }

  handleDelete() {
    this.props.deletePostItem(this.props.match.params.postId)
      .then(this.props.history.push('/posts'))
  };

  ///////////////////////////////// POST FORM ///////////////////////////////
  handleSubmit() {
  // handleSubmit(e) {
    // e.preventDefault();

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
      // description: ''
      author: fullName,
    });

    this.props.history.push('/post');
  }

  update(type) {
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }

  ///////////////////////////////// POST FORM ///////////////////////////////

  postForm() {
    let create = document.getElementById("create");
    if (create.classList.contains('hidden')) {
      create.classList.remove("hidden");
      create.classList.add("block");
    } else {
      create.classList.remove("block");
      create.classList.add("hidden");
    }
  }

  feed(){
    return 
  }

  render() {
    // console.log(this.props);

    return (
      <div className="flex overflow-hidden mx-auto w-full lg:mx-0 lg:w-3/5">
        <div className="flex-grow overflow-y-scroll">
          <div className="border-l border-r border-gray-300">
            <div className="flex border-gray-300 border-b p-6">
              <div className="flex-grow mr-4">
                <h1 className="text-2xl font-medium">Home</h1>
              </div>
              <div className="relative text-gray-600">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 0">
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                </div>
                <input className="appearance-none bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 pl-10 placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:placeholder-gray-400" type="search" placeholder="Search" />
              </div>
            </div>

            <div className="flex p-6 pb-6 border-gray-300 border-b-8">
              <div className="h-16 w-16 bg-indigo-500 rounded-full mr-4 mb-4 flex flex-shrink-0 items-center justify-center">
                <h1 className="text-3xl text-white text-center">{this.props.currentUser.firstName.split("")[0] + this.props.currentUser.lastName.split("")[0]}</h1>
              </div>
              {/* POST FORM */}
              <div className="flex-1 md:flex-grow">
                <button onClick={this.postForm}><h1 className="text-2xl font-medium">Create an activity</h1></button>
                <form onSubmit={this.handleSubmit} className="hidden" id="create">
                  <div className="w-full mt-4">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-1/2 mb-6 pr-3">
                        <label className="font-medium mb-2">
                          Start
                          </label>
                        <input
                          type="textarea"
                          value={this.state.start}
                          onChange={this.update('start')}
                          placeholder="Li Ka Shing"
                          className="appearance-none block bg-gray-100 w-full border border-gray-300 rounded-lg py-2 px-4 placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:placeholder-gray-400"
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
                          placeholder="International House"
                          className="appearance-none block bg-gray-100 w-full border border-gray-300 rounded-lg py-2 px-4 placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:placeholder-gray-400"
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
                          placeholder="Going Home"
                          className="appearance-none block bg-gray-100 w-full border border-gray-300 rounded-lg py-2 px-4 placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:placeholder-gray-400"
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
                          placeholder="10:00 pm"
                          className="appearance-none block bg-gray-100 w-full border border-gray-300 rounded-lg py-2 px-4 placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:placeholder-gray-400"
                        />
                      </div>
                    </div>
                    <input type="submit" value="Submit" className="appearance-none bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded" />
                  </div>
                </form>
              </div>
            </div>


{/* can logic for this.props.post.length go here? I want to load the create an activity form at the top*/}

            {this.props.posts.length === 0 ? 
              <div>
                There are no Posts
              </div>

              :

              <div className="feed pb-12 lg:pb-0">
                    {this.props.posts.map((p, idx) => (
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
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Post);
// export default (Post);


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