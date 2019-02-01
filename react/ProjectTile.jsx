const e = React.createElement;

const ProjectTile = ({text}) => {
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}

const ProjectsContainer = () => {
    return (
        <ProjectTile text="Some Words" ></ProjectTile>
    )
}

const domContainer = document.querySelector('#projects_container');
ReactDOM.render(e(ProjectsContainer), domContainer)