var e = React.createElement;

var ProjectTile = function ProjectTile({ title, desc, url }) {
    return (
        <div class="card">
            <span class="title">{title}</span>
            <span class="desc-container">
                <p class="desc-text">{desc}</p>
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
            <ProjectTile title="DMC Scheduler" desc="DMC Scheduler is a nurse rostering tool written for the nurses of Doctor's Medical Center of Modesto." url="https://github.com/johnrichardrinehart/DMCScheduler.py"></ProjectTile>
            <ProjectTile title="Some Other Words" desc='hey'></ProjectTile>
        </div>
    )
};

var domContainer = document.querySelector('#projects_container');
ReactDOM.render(e(ProjectsContainer), domContainer);