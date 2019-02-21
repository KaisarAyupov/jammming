// importing the react class and track component 
import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';

export default class TrackList extends React.Component {
   // TrackList render method
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track
                            key={track.id}
                            track={track}
                            onAdd={this.props.onAdd}
                            isRemoval={this.props.isRemoval}
                            onRemove={this.props.onRemove} />;
                    })
                }
            </div>
        );
    }
}
