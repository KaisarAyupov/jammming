// Importing the other components and stylesheets.
import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import PlayList from '../Playlist/Playlist.js';
import Spotify from '../../util/Spotify.js';

export default class App extends React.Component {
    // constructor for App declaring the App state variables
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            playListName: 'New PlayList',
            playListTracks: []
        };
        // Bindings for the this states of all the components.
        this.searchIt = this.searchIt.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlayListName = this.updatePlayListName.bind(this);
        this.savePlayList = this.savePlayList.bind(this);
    }
    
    searchIt(term) {
        Spotify.searchIt(term).then(searchResults => {
            this.setState({ searchResults: searchResults });
        });
    }
    // addTrack method 
    addTrack(track) {
        let tracks = this.state.playListTracks;
        if (!tracks.includes(track)) {
            tracks.push(track);
            this.setState({ playListTracks: tracks });
        }
    }
    // removeTrack 
    removeTrack(track) {
        let tracks = this.state.playListTracks;

        tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
        this.setState({ playListTracks: tracks });
    }
    // updatePlayListName take a given name 
    updatePlayListName(name) {
        this.setState({ playListName: name });
    }
    // savePlayList takes the constructed play list
    savePlayList() {
        const trackURIs = this.state.playListTracks.map(track => track.uri);
        Spotify.savePlayList(this.state.playListName, trackURIs).then(() => {
            this.setState(
                {
                    playListName: 'New Playlist',
                    playListTracks: []
                });
        });
    }
    // render 
    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar onSearch={this.searchIt} />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults}
                            onAdd={this.addTrack} />
                        <PlayList playListTracks={this.state.playListTracks}
                            playListName={this.state.playListName}
                            onNameChange={this.updatePlayListName}
                            onRemove={this.removeTrack}
                            onSave={this.savePlayList} />
                    </div>
                </div>
            </div>
        );
    }
}
