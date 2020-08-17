import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: '',
        }

        this.handleOnInputChange = this.handleOnInputChange.bind(this);
    }

    handleOnInputChange(e) {
        // e.preventDefault();

        const query = e.target.value;

        this.setState({
            state: {
                query
            }
        })
    }

    render() {
        const { query } = this.state; // const query = this.state.query;

        return (
            <div className="search-container">
                <label>
                    <input
                        className="appearance-none bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 pl-10 placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:placeholder-gray-400"
                        type='text'
                        // value=''
                        value={query}
                        id='search-input'
                        placeholder='Search'
                        onChange={this.handleOnInputChange}
                    />
                </label>
            </div>
        )
    }
}

export default Search;