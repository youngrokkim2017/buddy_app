import React from 'react';
import { Link } from 'react-router-dom';
// import CreateRequestContainer from '../request/create_request_container';
import CreateRequest from '../request/create_request';
import { withRouter } from 'react-router-dom';
import DeleteModal from '../modal/delete_modal'
// import EditModal from '../modal/edit_modal'

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.post;

        let fullName = this.props.currentUser.firstName + ' ' + this.props.currentUser.lastName;

        this.state = {
            // // requester: this.props.requester,
            // // loading: true,
            // // sending: false,
            // // cancelling: false,
            // // following: false,
            // followersCount: 0,
            // // followers: [],
            requesterId: null,
            // followFlag: this.props.followFlag || true,
            // status: this.props.requests.map((r) => r.status) || 'pending',
            // status: null,
            // // MODAL STATE
            openModal: false,
            editModal: false,
            // POST FORM STATES
            title: '',
            start: '',
            destination: '',
            time: '',
            // description: '',
            author: fullName,
        }

        this.handleBackToPreviousPage = this.handleBackToPreviousPage.bind(this);

        this.handleProfile = this.handleProfile.bind(this);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditModal = this.handleEditModal.bind(this);
        this.toggleEditModal = this.toggleEditModal.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);

        // this.handleAccept = this.handleAccept.bind(this);
        this.handleRequest = this.handleRequest.bind(this);
        this.handleRemoveRequest = this.handleRemoveRequest.bind(this);

        // handlers for follower counts
        // this.incrementFollower = this.incrementFollower.bind(this);
        // this.decrementFollower = this.decrementFollower.bind(this);

        // this.handleMessage = this.handleMessage.bind(this);
        this.handleChat = this.handleChat.bind(this);

        // this.deleteModal = this.deleteModal.bind(this)
        this.handleDeleteModal = this.handleDeleteModal.bind(this)

        // POST FORM HANDLERS
        this.handleSubmit = this.handleSubmit.bind(this);
        this.postFormStart = React.createRef();
        this.postFormDest = React.createRef();
    }

    componentDidMount() {
        // this.props.fetchOnePost(this.props.match.params.postId);
        this.props.fetchOnePost(this.props.match.params.id);

        this.props.fetchRequests(this.props.match.params.id);

        // // POST FORM LIFECYCLE 
        // this.startAutocomplete = new google.maps.places.Autocomplete(this.postFormStart.current);
        // this.destAutocomplete = new google.maps.places.Autocomplete(this.postFormDest.current);
        // this.startAutocomplete.addListener('place_changed', () => {
        //     this.setState({
        //         'start': this.postFormStart.current.value
        //     })
        // });
        // this.destAutocomplete.addListener('place_changed', () =>{
        //     this.setState({
        //         'destination': this.postFormDest.current.value
        //     })
        // });
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.fetchOnePost(this.props.match.params.id);
            // this.props.fetchRequests(this.props.match.params.id);
        }
    }

    handleBackToPreviousPage(e) {
        e.preventDefault();

        // this.props.history.goBack();
        this.props.history.push('/post');
        // this.props.history.replace('/post');

        window.location.reload(false);
    }

    handleProfile(e) {
        e.preventDefault();

        // this.props.history.push('/profile');
        this.props.history.push(`/profile/${this.props.post.user}`);
        window.location.reload(false);
    }

    deleteButton() {
        if (this.props.post.user === this.props.currentUserId) {
            return (
                <div>
                    <button onClick={this.handleDelete}>
                        Delete
                    </button>
                </div>
            )
        }
    }

    handleDelete(e) {
        // e.preventDefault();
        this.props.deletePostItem(this.props.post._id)
            // .then(this.props.history.push('/post'))
            // .then(this.props.history.replace('/post'))
            // .then(this.deleteModal)
            // .then(this.handleBackToPreviousPage)
            // .then(this.props.history.goBack())
            // .then(<DeleteModal />)
            .then(this.setState({openModal: true}))

        // window.location.reload(false);
    }

    handleDeleteModal(e) {
        e.preventDefault();

        this.setState({openModal: true})
    }

    // deleteModal() {
    //     return (
    //         <div>
    //             <h1>Post Deleted</h1>
    //             <button onClick={this.handleBackToPreviousPage}>Return to Newsfeed</button>
    //         </div>
    //     )
    // }

    handleEdit() {
    // handleEdit(e) {
        // e.preventDefault();

        if (this.props.post.user === this.props.currentUserId) {
            return (
                <div>
                    <Link to={`/post/${this.props.post._id}/edit`}>
                        <button>
                        {/* <button onclick={this.setState({editModal: true})}> */}
                            Edit
                        </button>
                    </Link>
                </div>
            )
        }
    }

    handleEditModal() {
        this.setState({editModal: true})
    }

    editButton() {
    // handleEdit(e) {
        // e.preventDefault();

        if (this.props.post.user === this.props.currentUserId) {
            return (
                <div>
                    {/* <Link to={`/post/${this.props.post._id}/edit`}> */}
                        {/* <button> */}
                        <button onClick={this.handleEditModal}>
                            Edit
                        </button>
                    {/* </Link> */}
                </div>
            )
        }
    }

    toggleEditModal() {
        this.setState({editModal: false})
    }

    // handleEdit() {

    // }

    // handleEditModal() {

    // }

    // handleAccept(e) {
    //     e.preventDefault();

    //     let request = this.props.requests
    //         .find(req => this.props.requests.includes(req) && req.post === this.props.post._id && req.requester === this.props.currentUser.id)

    //     this.props.history.push(`/requests/${request._id}`);
    // }

    requestButton() {
        let post = this.props.post;
        // console.log(post);

        let request = this.props.requests
            .find(req => this.props.requests.includes(req) && req.post === this.props.post._id && req.requester === this.props.currentUser.id)
        // console.log(request);  // undefined

        // if (post.user === this.props.currentUser.id) return (<p>Your Post</p>)

        return (
            // <CreateRequestContainer
            //     post={post}
            //     requested={false}
            // />
            <CreateRequest
                post={post}
                request={request}
                requested={false}
            />
        )
    }

    handleRequest(e) {
        e.preventDefault();

        // this.setState({
        //     sending: true,
        // });

        this.props.request(this.props.post._id)
            // .then(this.setState({
            //     requesterId: this.props.currentUserId,
            // }))

        this.setState({
            requesterId: this.props.currentUserId,
        })

        // IMPLEMENT TOGGLES FOR INCREMENT/DECREMENT FOLLOWER
        // this.incrementFollower();
    }

    handleRemoveRequest(e) {
        e.preventDefault();

        let requestId = this.props.requests.map((r, idx) => {
            return (r._id)
        })

        // let request = this.props.requests.map((r, idx) => {
        //     return (r)
        // })

        this.props.deleteRequest(requestId);
        // this.props.deleteRequest(request);

        this.setState({
            requesterId: null,
        })

        // IMPLEMENT TOGGLES FOR INCREMENT/DECREMENT FOLLOWER
        // this.decrementFollower();
    }

    // incrementFollower() {
    //     this.setState({
    //         requesterId: this.props.currentUserId,
    //     });

    //     this.toggleFollowFlag();
    // }

    // decrementFollower() {
    //     this.setState({
    //         requesterId: null,
    //     });

    //     this.toggleFollowFlag();
    // }

    // toggleFollowFlag() {
    //     this.setState({
    //         followFlag: !this.state.followFlag
    //     })
    // }

    handleChat(e) {
        e.preventDefault();

        // this.props.history.push(`/post/${this.props.post._id}/chat`);
        // this.props.history.push(`/post/${this.props.match.params.postId}/chat`);
        this.props.history.push(`/requests/${this.props.match.params.id}/chat`);
        // this.props.history.push(`/post/${this.props.match.params.id}/chat`);
    }

    handleMessage(e) {
        e.preventDefault();
    }

    timeAgo(x, badge = false) {
        let locales = {
            prefix: '',
            sufix: ' ago',
            seconds: 'just now',
            minute: 'a min',
            minutes: '%d min',
            hour: 'an hour',
            hours: '%d hours',
            day: 'a day',
            days: '%d days',
            month: 'a month',
            months: '%d months',
            year: 'a yr',
            years: '%d yrs'
        },
            seconds = Math.floor((new Date() - new Date(x)) / 1000),
            words = locales.prefix,
            interval = 0,
            intervals = {
                year: seconds / 31536000,
                month: seconds / 2592000,
                day: seconds / 86400,
                hour: seconds / 3600,
                minute: seconds / 60
            },
            distance = locales.seconds;

        for (let key in intervals) {
            interval = Math.floor(intervals[key]);

            if (interval > 1) {
                distance = locales[key + 's'];
                break;
            } else if (interval === 1) {
                distance = locales[key];
                break;
            }
        };

        distance = distance.replace(/%d/i, interval);
        words += distance;
        if (distance !== locales.seconds) {
            words += locales.sufix;
        }

        let parsed = words.trim();
        if (badge === false) {
            return parsed;
        } else if (seconds < 60 * 15) {
            let recent = <span className="self-center rounded bg-pink-500 text-white px-2 text-xs font-bold">New</span>;
            return recent;
        }
    };

    // POST FORM FUNCTIONS
    handleSubmit(e) {
        e.preventDefault();

        let fullName = this.props.currentUser.firstName + ' ' + this.props.currentUser.lastName;

        let post = {
            title: this.state.title,
            start: this.state.start,
            destination: this.state.destination,
            time: this.state.time,
            // description: this.state.description,
            author: this.state.author,
        };

        // this.props.composePost(post);
        // this.props.action(post);
        this.props.editPost(post);

        this.setState({
            title: '',
            start: '',
            destination: '',
            time: '',
            // description: '',
            author: fullName,
        });

        this.props.history.push('/post');

        window.location.reload(false);
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    render() {
        console.log(this.props);

        // console.log(this.props.currentUserId)
        // console.log(this.state.requesterId)

        if (this.props.post === undefined) return null;
        // let { post } = this.props;

        // let requesterId = this.props.requests.map((r, idx) => {
        //     return (r.requester)
        // })

        // console.log(requesterId);

        let requesters = this.props.requests.map((request) => request.requester);
        // console.log(requesters)

        return (
            <div className="flex overflow-hidden mx-auto w-full lg:mx-0 lg:w-3/5">
                <div className="flex-grow overflow-y-scroll">
                    <div className="border-l border-r border-gray-300 h-screen">
                        <div className="p-6 pb-6">
                            <div>
                                <button onClick={this.handleBackToPreviousPage}>Back</button>
                            </div>

                            <br />
                            <div>
                                <div>
                                    {/* <div className="p-6 border-b border-gray-300 flex flex-wrap hover:text-blue-600"> */}
                                    <div className="p-6 border-b border-gray-300 flex flex-wrap">
                                        <div className="h-16 w-16 bg-gray-500 rounded-full mr-4 mb-4 flex flex-shrink-0 items-center justify-center">
                                            <h1 className="text-3xl text-white text-center">{this.props.post.author.split(" ").map((n, i, a) => i === 0 || i + 1 === a.length ? n[0] : null).join("")}</h1>
                                        </div>
                                        <div className="flex-1 md:flex-grow">
                                            <div className="flex flex-wrap">
                                                {/* <h1 className="mr-1 text-xl">{this.props.post.author}</h1> */}
                                                {/* <Link to={`/profile/${this.props.post.user}`}>{this.props.post.author}</Link> */}
                                                <button onClick={this.handleProfile}>{this.props.post.author}</button>
                                                {this.timeAgo(this.props.post.date, true)}
                                            </div>
                                            <div className="flex flex-wrap items-center text-2xl">
                                                <h1 className="mr-1">{this.props.post.start.split(",")[0]}</h1>
                                                <svg className="mr-1 fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" /></svg>
                                                <h1 className="capitalize">{this.props.post.destination.split(",")[0]}</h1>
                                            </div>
                                            <div className="flex flex-wrap items-center text-xl">
                                                <h1 className="mr-1">{this.props.post.time}</h1>
                                                <span className="mr-1">•</span>
                                                <h1 className="capitalize">{this.props.post.title}</h1>
                                            </div>
                                            <div className="block md:hidden">
                                                <span className="text-gray-500">{this.timeAgo(this.props.post.date)}</span>
                                            </div>
                                        </div>
                                        <div className="hidden md:block">
                                            <span className="text-gray-500">{this.timeAgo(this.props.post.date)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />

                            {/* <div>
                                <button onClick={this.handleMessage}>Message</button>
                            </div> */}
                            <div>
                                {/* <button onClick={this.handleEdit()}>Edit</button> */}
                                {this.editButton()}
                                {this.state.editModal === false ?
                                    null
                                    :
                                    // <EditModal editModal={this.state.editModal} />
                                    <div className='modal-background'>
                                        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                                <div className="sm:flex sm:items-start">
                                                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                  </div>
                                                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                                      Edit Post
                                                    </h3>
                                                    <div className="mt-2">
                                                      <p className="text-sm text-gray-500">
                                                        {/* Edit Post Form Goes Here */}
                                                        <div className="flex overflow-hidden mx-auto w-full lg:mx-0 lg:w-3/5">
                                                            <div className="flex-grow overflow-y-scroll">
                                                                <div className="border-l border-r border-gray-300 h-screen">
                                                                    <div className="p-6 pb-6">

                                                                        <h1 className="text-2xl font-medium mb-4">Edit Activity</h1>
                                                                        {/* {this.props.location.pathname === `/post/${this.props.post._id}/edit}` ?
                                                                            <h1 className="text-2xl font-medium mb-4">Edit Activity</h1>

                                                                            :

                                                                            <h1 className="text-2xl font-medium mb-4">Create an activity</h1>
                                                                        } */}

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
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                <button type="button" onClick={this.toggleEditModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                                  Cancel
                                                </button>
                                                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                                  Update
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div>
                                {this.deleteButton()}
                                {this.state.openModal === false ?
                                    null
                                    :
                                    <DeleteModal />
                                }
                            </div>
                            <div>
                                {/* {this.props.currentUserId === this.state.requesterId ?
                                    <button onClick={this.handleRemoveRequest}>Unfollow</button>
                                    :
                                    <button onClick={this.handleRequest}>Follow</button>
                                } */}
                                {/* {
                                    this.props.requests.map((request) => {
                                        {request.requester === this.props.currentUserId ? 
                                            <button onClick={this.handleRemoveRequest}>Unfollow</button>
                                        :
                                            <button onClick={this.handleRequest}>Follow</button>
                                        }
                                        
                                    })
                                } */}
                                {requesters.includes(this.props.currentUserId) ?
                                    <button onClick={this.handleRemoveRequest}>Unfollow</button>
                                :
                                    <button onClick={this.handleRequest}>Follow</button>
                                } 
                                <div>
                                    {this.props.requests.length}
                                </div>
                            </div>
                            {this.props.currentUser.firstName + " " + this.props.currentUser.lastName !== this.props.post.author ? 
                                <div className="chat-button-container">
                                    <button onClick={this.handleChat}>
                                        Message
                                    </button>
                                </div>
                            :
                                ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default PostShow;
export default withRouter(PostShow);