import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: [],
            isNewestFirst: true,
        };

        this.handleDelete = this.handleDelete.bind(this);
        // this.toggleSortDate = this.toggleSortDate.bind(this);
        // this.handleAlphaSort = this.handleAlphaSort.bind(this);
    }

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

    // componentWillReceiveProps(newState) {
    // componentDidUpdate(prevState) {
    //     // this.setState({ post: newState.post });
    //     this.setState({ post: prevState.post });
    // }

    handleDelete() {
      this.props.deletePostItem(this.props.match.params.postId)
        .then(this.props.history.push('/posts'))
    };

    handleAlphaSort() {
      let titlesArr = this.props.post.map((p) => {
        return p.title;
      });

      return titlesArr.sort();
    }

    toggleSortDate(e) {
      this.sortByDate();
    }

    sortByDate() {
      const { post } = this.state;
      let sortedPost = post;
      if (this.state.isNewestFirst) {
        sortedPost = post.sort((a, b) => a.date < b.date)
      } else {
        sortedPost = post.sort((a, b) => a.date > b.date);
      };

      this.setState({
        post: sortedPost,
        isNewestFirst: !this.state.isNewestFirst,
      });
    }

    render() {
        // console.log(this.state);
        console.log(this.props);
        // console.log(this.props.post);

        // const { post } = this.state;

        if (this.props.post.length === 0) {
            return (
                <div>
                    There is no Post
                </div>
            );
        } else {
            return (
              <div>
                <div>
                  {/* <button onClick={this.handleAlphaSort}>A-Z</button> */}
                  {/* <button onClick={this.toggleSortDate}>Date</button> */}
                </div>

                {/* <br/> */}
                <h2>All Post</h2>
                {/* <br/> */}
                <div>
                  {this.props.post.map((p) => (
                    <PostIndexItem
                      key={p._id}
                      title={p.title}
                      start={p.start}
                      destination={p.destination}
                      time={p.time}
                      description={p.description}
                    />
                  ))}
                  {/* <div className="post-delete-button-container">
                    <button className="delete-post" onClick={this.handleDelete}>Delete Post</button>
                  </div> */}
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