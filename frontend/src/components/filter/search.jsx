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

    handleOnInputChange(e) {
        e.preventDefault();

        const query = e.target.value;

        this.setState({
            state: {
                query: query,
                loading: true,
                message: '',
            }
        })
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    render() {
        const { query } = this.state; // const query = this.state.query;

        console.warn(this.state);

        return (
            <div className="search-container">
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
            </div>
        )
    }
}

export default Search;