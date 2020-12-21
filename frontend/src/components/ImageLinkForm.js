import React, { Component } from 'react';
import '../css/imagelink.css';

export default class ImageLinkForm extends Component {
    
    render() {
        return (
            <div className="center">
                <p className="link">
{'This magic brain will detect faces in your picture. Give it a shot!'}
                </p>
                <div className="img-link">
                <input className="input" type="text" onChange={this.props.onInputChange}/>
                <button className="detect-btn" onClick={this.props.onButtonSubmit}
                >Detect</button>
                </div>
            </div>
        )
    }
}
