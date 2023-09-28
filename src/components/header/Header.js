import React from "react";
import { Link } from "react-router-dom";
//Imports components
import LogOutButton from "../logOutButton/LogOutButton";
//Imports icons
import logo from '../../images/logo.png';
//Import CSS
import './header.css';

function Header({ nameOfProject, classNameHeader }) {
    return (
        <header className={classNameHeader}>
            <h1>Proyecto {nameOfProject}</h1>
            {classNameHeader === 'header flex' &&
                <Link to={'/home'} className='linkToHome'>Cerrar proyecto</Link>
            }
            <div className='logoBox flex'>
                <img
                    src={logo}
                    className='logo'
                    alt='Logotipo OpenCore'
                />
            </div>
            <LogOutButton className='logOutButton flex' />
        </header>
    )
};

export default Header;