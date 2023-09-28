import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { v4 as uid4 } from 'uuid';
// import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
// import { db } from '../../firebase/firebase';
//Imports de componentes
import { principalConnection } from '../../context/data';

import './formNewProject.css';

function FormNewProject({ classNameVisibility, setButtonAddNewProject }) {
    const { projectsList, setProjectsList } = useContext(AppContext);

    const [inputNameOfProject, setInputNameOfProject] = useState('');
    const [inputDescriptionOfProject, setInputDescriptionOfProject] = useState('');
    const [errorMessages, setErrorMessages] = useState(false);



    const handleInputChange = (e) => {
        if (e.target.name === 'nameOfProject') {
            setErrorMessages(false);
            setInputNameOfProject(e.target.value);
        }
        if (e.target.name === 'descriptionOfProject') {
            setInputDescriptionOfProject(e.target.value);
        }
    }

    async function handleSaveNewProjectButton() {
        let uid = uid4();
        let newProject = {
            nameOfProject: inputNameOfProject,
            descriptionOfProject: inputDescriptionOfProject,
            id: uid,
            // list: [],
            // forms: [],
            // connections: [{
            //     ...principalConnection, 
            //     uid: uid
            // }]
        }
        
        const equalNames = project => project.uid === newProject.uid;

        const found = projectsList.findIndex(equalNames);

        if (inputNameOfProject) {
            setErrorMessages(false);
            if (found >= 0) {
                console.log('existo');
                fetch(`http://localhost:3001/projectsList/${newProject.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newProject),
                })
                    .then(response => response.json())
                    .then(data => {
                        // Actualiza el estado con la lista de proyectos actualizada
                        const updatedProjectsList = projectsList.map(project => {
                            if (project.id === data.id) {
                                return data; // Reemplaza el proyecto existente con el nuevo
                            }
                            return project;
                        });
                        setProjectsList(updatedProjectsList);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                console.log('no existo');
                // Si no existe, agrega un nuevo proyecto como se hizo antes
                fetch('http://localhost:3001/projectsList', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newProject),
                })
                    .then(response => response.json())
                    .then(data => {
                        setProjectsList([...projectsList, data]);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
            setInputNameOfProject('');
            setInputDescriptionOfProject('');
            setButtonAddNewProject(false);
        } else {
            setErrorMessages(true);
        }
    };

    const closeForm = () => {
        setButtonAddNewProject(false);
        setInputNameOfProject('');
        setInputDescriptionOfProject('');
        setErrorMessages(false);
    }

    return (
        <>
            <div className={`backgroundBehindOverlay flex ${classNameVisibility}`}></div>
            <section className={`newProjectContainer flex ${classNameVisibility}`}>
                <header className='headerNewProject flex'>
                    <h1>Nuevo Proyecto</h1>
                </header>
                <form className="formNewProject flex">
                    <label htmlFor='nameOfProject' className='inputText flex'>
                        <span className='label flex'>Nombre</span>
                        <input
                            type='text'
                            name='nameOfProject'
                            className={`input ${errorMessages && 'error'}`}
                            placeholder='Escribe el nombre del nuevo proyecto'
                            onChange={handleInputChange}
                            value={inputNameOfProject}
                        />
                    </label>
                    {errorMessages && <p className='errorMessage'>Debes ingresar un nombre válido para continuar.</p>}
                    <label htmlFor='descriptionOfProject' className='inputText flex'>
                        <span className='label flex'>Descripción</span>
                        <input
                            type='text'
                            name='descriptionOfProject'
                            className='input'
                            placeholder='Escribe alguna descripción'
                            onChange={handleInputChange}
                            value={inputDescriptionOfProject}
                        />
                    </label>
                </form>
                <button type='submit' className='saveNewProjectButton' onClick={handleSaveNewProjectButton}>
                    <p>Guardar nuevo proyecto</p>
                </button>
                <p className='closeForm' onClick={closeForm}>Cancelar</p>
            </section>
        </>

    )
};

export default FormNewProject;