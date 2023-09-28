import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './logInButton.css';

function LogInButton () {
    const { loginWithRedirect } = useAuth0();
    
    return (
        <button onClick={() => loginWithRedirect()} className='logInButton'>Log In</button>
    )
}

export default LogInButton;