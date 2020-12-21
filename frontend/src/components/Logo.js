import React, { Component } from 'react'
import '../css/logo.css';
import Tilt from 'react-tilt';


export default class Logo extends Component {
    render() {
        return (
        <div className="logo">
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
            <div className="Tilt-inner"> 👽 </div>
            </Tilt>
        </div>
        )
    }
}
