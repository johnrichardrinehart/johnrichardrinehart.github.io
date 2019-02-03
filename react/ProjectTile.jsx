import React from 'react';
import ReactDOM from 'react-dom';
import projects from './projects.jsx';
var e = React.createElement;

var ProjectTile = function ProjectTile({ title, desc, url, techs, status }) {
    return (
        <div class="card">
            <span class="title">{title}</span>
            <span class="desc-container">
                <p class="desc-text">
                    <p class="desc"><b>{title}&nbsp;</b>{desc}</p>
                    <p class="footnote-container">
                        <p class="footnote status"><b>Status: </b>{status} </p>
                        <p class="footnote technologies"><b>Technologies: &nbsp;&nbsp;</b>
                            <p>
                                {
                                    techs.length > 0 ? techs
                                        .map(x => (<u>{x}</u>))
                                        .reduce((p, c) => [, p, ', ', c])
                                        : ''}
                            </p>
                        </p>
                    </p>
                </p>
                <p class="desc-link">
                    <a href={url}>
                        <img src="assets/GitHub-Mark/PNG/GitHub-Mark-64px.png" alt="GitHub" />
                    </a>
                </p>
            </span>
        </div>
    )
};

var ProjectsContainer = function ProjectsContainer() {
    return (
        <div>
            {projects.map(x => <ProjectTile {...x} />)}
        </div>
    )
};

var domContainer = document.querySelector('#projects_container');
ReactDOM.render(e(ProjectsContainer), domContainer);