import React from 'react'
import '../css/nav.css';

const Navigation =({onRouteChange, isSignedIn}) => {

    
            if (isSignedIn) {
                return (
                    <nav>
                    <p onClick={() => onRouteChange('signout')}>Sign out</p>
                    </nav>
                )
            } else {
                return (
                    <nav>
                    <p onClick={() => onRouteChange('signin')}>Sign In</p>

                    <p onClick={() => onRouteChange('register')}>Register</p>
                    </nav>
                )
            }
            
    
};

export default Navigation;