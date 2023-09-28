import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
/* Imports de Componentes */
import Header from "../../components/header/Header";
import Loading from "../../components/loading/Loading";
import FormNewProject from "../../components/formNewProject/FormNewProject";
import ProjectsListItem from "../../components/ProjectsListItem";
import Button from "../../components/Button";
/* Imports de icons*/
import add from '../../icons/add.svg';
/* CSS */
import './home.css';

function Home () {

    const { isAuthenticated, isLoading } = useAuth0();
    
    const [buttonAddNewProject, setButtonAddNewProject] = useState(false);

    const handleButtonAddNewProject = () => {
        setButtonAddNewProject(true);
    }

    return (
        <section className='homePage flex'>
            <Header classNameHeader='headerHome flex' />
            {isLoading
                ? <Loading />
                : isAuthenticated
                    ? (
                        <main className='mainHome flex'>
                            <article className='projectsBox flex'>
                                <header className='headerProjects flex'>
                                    <h1>Mis Proyectos</h1>
                                </header>
                                <ProjectsListItem />
                                <Button 
                                    className='buttonAddNewProject flex'
                                    handleEvent={handleButtonAddNewProject}
                                    imgSrc={add}
                                    imgAlt='Agregar nuevo proyecto'
                                    imgClassName='addIcon'
                                    name='Agregar nuevo proyecto'
                                />
                            </article>
                            <FormNewProject classNameVisibility={buttonAddNewProject ? 'visible' : 'hidden'} setButtonAddNewProject={setButtonAddNewProject} /> 
                        </main>
                    )
                    : <Navigate to='/' replace={true}/>         
                }
        </section>
    )
}

export default Home;