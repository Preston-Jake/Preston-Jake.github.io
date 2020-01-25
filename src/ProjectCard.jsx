import React from 'react'
import './ProjectCard.css'
export default function ProjectCard(props) {
    
    return (
        <div className="ProjectCard">
            <div class="ProjectCard-content">
                <h3>{props.projectName}</h3>
            <div class="ProjectCard-image" style={{backgroundImage: "url(" + props.projectImage + ")"}}/>
                <p>{props.projectDiscription}</p>
            </div>
        </div>
    )
}
