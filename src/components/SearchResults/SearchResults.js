// import TrackList, React and css
import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList.js';

export default class SearchResults extends React.Component {
    // a render method that returns the HTML linked above 
    render() {
        return (
            <div className="SearchResults">
                <h2 className="SearchResultsTitle">Results</h2>
                <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} />
            </div>
        );
    }
}