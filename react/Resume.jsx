import React from 'react';
import ReactDOM from 'react-dom';
import resumeInfo from '../assets/resumeInfo.json';

function Resume(props) {
    return (
        <div id="resume">
            <Heading></Heading>
            <EducationSection></EducationSection>
            <JobsSection></JobsSection>
            <ProjectsSection></ProjectsSection>
            <AdditionalExperience></AdditionalExperience>
        </div>
    )
}

function Heading(props) {
    return (
        <div>
            <div class="container">
                <p id="name" class="child heading to-center yield-height">
                    John Rinehart
            </p>
            </div>
            <p id="name-border" class="child"></p>
            <div class="container contact-info">
                <div class="child to-center">
                    <span class="item">johnrichardrinehart@gmail.com</span> |
           <span class="item">+1 (415) 660-0640</span> |
           <span class="item">johnrichardrinehart.github.io</span>
                </div>
            </div>
        </div>
    )
}
function Section(props) {
    return (
        <div id={props.ID}>
            <div class="child no-space to-center yield-height">
                <p className="heading">{props.sectionName}</p>
            </div>
            {props.children}
        </div>
    )
}

function Stage(props) {
    return (
        <div className="job">
            {
                (props.title || props.datestring) &&
                <div className="job-where-and-when">
                    {
                        props.title &&
                        <div className="job-title to-left">
                            {props.title}
                        </div>
                    }
                    <div className="job-timespan to-right">
                        {props.datestring}
                    </div>
                </div>
            }
            {
                props.institutionName &&
                <div className="job-info">
                    <div className="school-affiliation to-left">
                        {props.institutionName}
                    </div>
                </div>
            }
            {
                props.brief &&
                <p className="job-desc">
                    {props.brief}
                </p>
            }
            {
                props.accomplishments &&
                <ul className="job-desc job-list">
                    {props.accomplishments.map(a => <li>{a}</li>)}
                </ul>
            }
        </div>
    )
}

function School(props) {
    var mappedProps = Object.assign({}, props.school)
    mappedProps.institutionName = mappedProps.name; delete mappedProps.name;
    mappedProps.title = mappedProps.degree; delete mappedProps.degree;
    return Stage(mappedProps)
}

function Job(props) {
    var mappedProps = Object.assign({}, props.job)
    mappedProps.institutionName = mappedProps.company; delete mappedProps.company;
    return Stage(mappedProps)
}

function Project(props) {
    var mappedProps = Object.assign({}, props.project)
    mappedProps.title = mappedProps.name; delete mappedProps.name;
    return Stage(mappedProps)
}

function EducationSection(props) {
    return (
        <Section ID="education" sectionName="Academic Education">
            {resumeInfo.education.map(school => <School school={school}></School>)}
        </Section>
    )
}

function JobsSection(props) {
    return (
        <Section ID="jobs" sectionName="Employment">
            {resumeInfo.jobs.map(job => <Job job={job}></Job>)}
        </Section>
    )
}

function ProjectsSection(props) {
    return (
        <Section ID="projects" sectionName="Projects">
            {resumeInfo.projects.map(p => <Project project={p}></Project>)}
        </Section>
    )
}

function AdditionalExperience(props) {
    return (
        <Section ID="additional-experience" sectionName="Additional Experience">
            <ul>
                {resumeInfo.additionalExperience.map(p => <li>{p}</li>)}
            </ul>
        </Section>
    )
}
var domContainer = document.querySelector('#resume_container');

var e = React.createElement;
ReactDOM.render(e(Resume), domContainer);