import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { AppContext } from "../context/AppContext";

function ProjectsListItem() {
    const { projectsList } = useContext(AppContext);;
    console.log(projectsList);

    let validation = projectsList.length > 0 ? true : false;

    return (
        <aside className='listOfProjects'>
            {validation ? projectsList.map((project) => {
                return (
                    <li key={project.id} className="project flex">
                        <Link to={`/${project.nameOfProject}`} className="link">
                            <h2>{project.nameOfProject}</h2>
                        </Link>
                    </li>
                )
            }) : <aside className='notFoundProjects flex'>
                    <p>No existen proyectos</p>
                </aside>

            }
        </aside>
    )
};

export default ProjectsListItem;