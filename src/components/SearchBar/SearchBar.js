// Import React and SearchBar.css
import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
    // constructor
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.searchIt = this.searchIt.bind(this);
    }
    // event handler 
    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }
    // method 
    searchIt() {
        this.props.onSearch(this.state.term);
    }
    // render
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <a onClick={this.searchIt}>SEARCH</a>
            </div>
        );
    }
}
