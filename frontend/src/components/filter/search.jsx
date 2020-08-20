import React from 'react';
// import axios from 'axios';
import PostIndexItem from '../post/post_index_item';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // query: '',
            // results: {},
            // loading: false,
            // message: '',
            search: '',
        }

        // this.handleOnInputChange = this.handleOnInputChange.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    componentDidMount() {
        // this.props.fetchPosts();
        // this.props.fetchSearchedPosts();
    }

    handleSearchInput(e) {
        this.setState({
            // search: e.target.value,
            search: e.currentTarget.value,
        })
    }

    ///////////////////////////////////////////////////////////////////////////

    // handleOnInputChange(e) {
    //     e.preventDefault();

    //     // const query = e.target.value;
    //     const query = e.currentTarget.value;

    //     this.setState({
    //         state: {
    //             query: query,
    //             loading: true,
    //             message: '',
    //         }
    //     })
    // }

    // handleOnInputChange(e) {
    //     e.preventDefault();

    //     const query = e.target.value;

    //     this.setState({
    //         state: {
    //             query: query,
    //             loading: true,
    //             message: '',
    //         }
    //     })
    // }

    // update(type) {
    //     return e => this.setState({
    //         [type]: e.currentTarget.value
    //     });
    // }

    // fetchSearchResults = (updatePageNo, query) => {
    //     const searchURL
    // }

    ///////////////////////////////////////////////////////////////////////////

    render() {
        const { query } = this.state; // const query = this.state.query;

        console.warn(this.state);

        return (
            <div>
                <div className="search-container">
                    <input 
                        type="text"
                        onChange={this.handleSearchInput}
                    />
                </div>

            {/* {this.props.posts.length === 0 ? 
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
            } */}
            </div>
        )
    }
}

export default Search;

{/* <form onSubmit={this.handleOnInputChange}>
    <label>
        <input
            className="appearance-none bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 pl-10 placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:placeholder-gray-400"
            type='text'
            // value=''
            name='query'
            value={query}
            id='search-input'
            placeholder='Search'
            // onChange={this.handleOnInputChange}
            onChange={this.update('query')}
        />
    </label>

    <input type="submit" value="SEARCH" />
</form> */}