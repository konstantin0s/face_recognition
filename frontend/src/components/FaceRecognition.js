import React, { Component } from 'react'
import '../css/face.css';

export default class FaceRecognition extends Component {
    render() {
        return (
          <div className="center">
              <img alt="sample" 
              src={this.props.imageUrl} />
          </div>
        )
    }
}
