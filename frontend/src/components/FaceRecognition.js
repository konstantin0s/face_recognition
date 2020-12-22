import React, { Component } from 'react'
import '../css/face.css';

export default class FaceRecognition extends Component {
    render() {
        return (
          <div className="center">
              <img alt="sample" id="inputImage" 
              src={this.props.imageUrl} />
              <div className="bounding-box"
              style={{top: this.props.box.topRow, 
                right : this.props.box.rightCol, 
                bottom: this.props.box.bottomRow,
                left: this.props.box.leftCol}}>

              </div>
          </div>
        )
    }
}
