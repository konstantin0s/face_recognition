
import React, { Component } from 'react'
import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition';
import Rank from './components/Rank';
import Particles from 'react-particles-js';
import Clarifai, { FACE_DETECT_MODEL } from "clarifai";

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLIENT_ID
})

const particlesOptions = {
  particles: {
    number: {
      value: 38,
      density: {
        enabled: true,
        value_area: 888
      }
    }
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onSubmit = () => {
  this.setState({imageUrl: this.state.input})
  app.models.predict(Clarifai.FACE_DETECT_MODEL,
     this.state.input).then(
    function(response) {
      // do something with response
      console.log(response);
      console.log(response.outputs[0].data.regions[0].region_info.bounding.box);
    },
    function(err) {
      // there was an error
    }
  );
}

  render() {
    return (
      <div className="App">
      <Navigation />
      <Logo />
      <Rank />
           <ImageLinkForm onInputChange={this.onInputChange}
           onButtonSubmit={this.onSubmit}/>
    <FaceRecognition imageUrl={this.state.imageUrl}/>
      <Particles className="particles" 
                params={particlesOptions} />
    </div>
    )
  }
}

