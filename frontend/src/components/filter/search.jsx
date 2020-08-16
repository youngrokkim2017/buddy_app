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

        const query = e.tagerget.value;

        this.setState({
            state: {
                query
            }
        })
    }

    render() {
        return (
            <div className="search-container">
                <label>
                    <input
                        type='text'
                        value=''
                        id='search-input'
                        placeholder='Search'
                    />
                </label>
            </div>
        )
    }
}

export default Search;