import React from 'react';
import { withRouter } from 'react-router-dom';
import MusicBox from './music_box';

class Music extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            music: []
        };
    }

    componentWillMount() {
        this.props.fetchMusic();
    }

    componentWillReceiveProps(newState) {
        this.setState({ music: newState.music });
    }

    render() {
        if (this.state.tweets.length === 0) {
            return (
                <div>
                    There is no Music
                </div>
            );
        } else {
            return (
                <div>
                    <h2>All Music</h2>
                    {this.state.music.map(m => (
                        <MusicBox key={m._id} title={m.title} author={m.author} genre={m.genre} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Music);