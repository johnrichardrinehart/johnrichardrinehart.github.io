var e = React.createElement;

var ProjectTile = function ProjectTile({ title }) {
    return (
        <div class="card">
            <p class="title">{title}</p>
        </div>
    )
};

var ProjectsContainer = function ProjectsContainer() {
    return (
        <div>
            <ProjectTile title="Some Words"></ProjectTile>
            <ProjectTile title="Some Other Words"></ProjectTile>
        </div>
    )
};

var domContainer = document.querySelector('#projects_container');
ReactDOM.render(e(ProjectsContainer), domContainer);