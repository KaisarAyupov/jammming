import React from 'react';
import '../Playlist/Playlist.css';
import TrackList from '../TrackList/TrackList.js';

export default class PlayList extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }
    // event handler 
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }
    // render method 
    render() {
        return (
            <div className="Playlist">
                <input value={this.props.playListName} onChange={this.handleNameChange} />
                <TrackList
                    tracks={this.props.playListTracks}
                    isRemoval={true}
                    onRemove={this.props.onRemove} />
                <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
            </div>
        );
    }
}
