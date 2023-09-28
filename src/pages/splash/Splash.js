import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

import LogInButton from '../../components/logInButton/LogInButton';
import Loading from '../../components/loading/Loading'

import logo from '../../images/logo.png';

import './splash.css';

function Splash () {
    const { isAuthenticated, isLoading } = useAuth0();

    return(
        <main className='splashPage'>
            {isAuthenticated 
                ? <Navigate to='/home' replace={true}/>
                : isLoading
                    ? <Loading />
                    :
                        <section className="splash flex">
                            <aside className="boxLoginButton">
                                <LogInButton />
                            </aside>
                            <article className="boxSplash flex">
                                    <h1>Bienvenido a</h1>
                                    <div className="boxLogo flex">
                                        <img 
                                            src={logo} 
                                            className="logo"
                                            alt="logoOpenCore" />
                                    </div>
                            </article>
                        </section>
            }
        </main>
    )
}

export default Splash;