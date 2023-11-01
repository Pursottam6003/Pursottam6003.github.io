import React from 'react'
import projectIcon from '../images/projects/projectIcon.svg'
import ProjectCardComponent from './ProjectCardComponent'

export const Projects = () => {
    return (
        <>
            <div className="ProjectExperience reveal" id="myprojects">
                    <img src={projectIcon}
                        id="projecticon" alt="exper" />
                <h2>My Projects</h2>
                <div className="ani">
                    <div className="bar"></div>
                </div>
                <br />
                <br />
                <br />
                <ProjectCardComponent/>
            </div>
        </>
    )
}
