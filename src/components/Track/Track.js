import React from 'react';
import './Track.css';


export default class Track extends React.Component {
    // contructor 
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    // addTrack method 
    addTrack(event) {
        this.props.onAdd(this.props.track);
    }
    // removeTrack method 
    removeTrack(event) {
        this.props.onRemove(this.props.track);
    }
    // renderAction method 
    renderAction() {
        if (this.props.isRemoval) {
            return <a className="Track-action" onClick={this.removeTrack}>-</a>;
        }
        return <a className="Track-action" onClick={this.addTrack}>+</a>;
    }
    // component render method 
    render() {
        return (
            <div className="Track">
                <img className="Track-img" src={this.props.track.image.url} alt={`${this.props.track.album}`} />
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist}
                        | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>

        );
    }
}
