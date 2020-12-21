
import React, { Component } from 'react'
import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import Particles from 'react-particles-js';

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
      input: ''
    }
  }

onInputChange = (event) => {
  console.log(event.target.value);
}

onSubmit = () => {
  console.log('click');
}

  render() {
    return (
      <div className="App">
      <Navigation />
      <Logo />
      <Rank />
           <ImageLinkForm onInputChange={this.onInputChange}
           onButtonSubmit={this.onSubmit}/>
      <Particles className="particles" 
                params={particlesOptions} />
    </div>
    )
  }
}

