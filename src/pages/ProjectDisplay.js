import React from 'react';
import {useParams} from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import { GitHub } from '@mui/icons-material';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const {id} = useParams();
  const project = ProjectList[id];
  return <div className='project'>
    <h1> {project.name}</h1>
    <img src = {project.image}/>
    <p>
      <a 
        href={project.webpage}
        target="_blank" 
        rel="noopener noreferrer">
        {project.webpageName}
      </a>
    </p>
    <p>
        <b>Skills: {project.skills}</b>
    </p>
    <h4 className='pressBelow'>
      Press the below GitHub icon for source code
    </h4>
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer">
      <GitHub />
    </a>
  </div>
}

export default ProjectDisplay