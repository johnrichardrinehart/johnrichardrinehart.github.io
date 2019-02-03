var e = React.createElement;

const TechnologiesEnum = {
    JAVASCRIPT: `javascript`,
    PYTHON3: `python3`,
    TABULATOR: `Tabulator`,
    WEBSOCKET: `WebSocket`,
    GOLANG: `Go`,
    REACT: `React`,
    REDUX: `Redux`,
    CELERY: `Celery`,
    RABBITMQ: `RabbitMQ`,
    VUE: `Vue`,
    HTML: `HTML`,
    CSS: `CSS`,
    NPM: `npm`,
    NODE: `node`,
    BABEL: `babel`,
    SESSIONSTORAGE: `SessionStorage`,
    LATEX: `LaTeX`,
    REACTNATIVE: `react-native`,
    ANDROID: `android`,
    IOS: `iOS`,
}
const _projects = [
    {
        title: 'DMCScheduler.py',
        desc: `is a nurse rostering tool written for the nurses of Doctor's Medical Center of Modesto.`,
        techs: [
            TechnologiesEnum.PYTHON3,
            TechnologiesEnum.JAVASCRIPT,
            TechnologiesEnum.TABULATOR,
            TechnologiesEnum.WEBSOCKET,
            TechnologiesEnum.HTML,
            TechnologiesEnum.CSS,
        ],
        url: `https://github.com/johnrichardrinehart/DMCScheduler.py`,
        status: `Stable`
    }, {
        title: 'website',
        desc: `is the repository containing the development of my personal website.`,
        techs: [
            TechnologiesEnum.REACT,
            TechnologiesEnum.HTML,
            TechnologiesEnum.CSS,
            TechnologiesEnum.NPM,
            TechnologiesEnum.NODE,
            TechnologiesEnum.BABEL,
            TechnologiesEnum.SESSIONSTORAGE,
        ],
        url: `https://github.com/johnrichardrinehart/website`,
        status: `Stable`,
    }, {
        title: 'gotex',
        desc: `is a project that seeks to provide real-time compilation of LaTeX documents tracked in Git repositories and provide a convenient analysis frontend for changes to the LaTeX document.`,
        techs: [
            TechnologiesEnum.JAVASCRIPT,
            TechnologiesEnum.WEBSOCKET,
            TechnologiesEnum.GOLANG,
            TechnologiesEnum.LATEX,
        ],
        url: `https://github.com/johnrichardrinehart/gotex`,
        status: `Stable`,
    }, {
        title: 'IEC',
        desc: `is a cross-platform mobile application designed to streamline operations for Industrial Electrical Company of Modesto, California.`,
        techs: [
            TechnologiesEnum.REACT,
            TechnologiesEnum.REACTNATIVE,
            TechnologiesEnum.ANDROID,
            TechnologiesEnum.IOS,
        ],
        url: `https://github.com/johnrichardrinehart/IEC`,
        status: `Stable`,
    },
]
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
            {_projects.map(x => <ProjectTile {...x} />)}
        </div>
    )
};

var domContainer = document.querySelector('#projects_container');
ReactDOM.render(e(ProjectsContainer), domContainer);