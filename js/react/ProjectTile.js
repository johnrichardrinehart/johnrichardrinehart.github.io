var e = React.createElement;

var TechnologiesEnum = {
    JAVASCRIPT: 'javascript',
    PYTHON3: 'python3',
    TABULATOR: 'Tabulator',
    WEBSOCKET: 'WebSocket',
    GOLANG: 'Go',
    REACT: 'React',
    REDUX: 'Redux',
    CELERY: 'Celery',
    RABBITMQ: 'RabbitMQ',
    VUE: 'Vue',
    HTML: 'HTML',
    CSS: 'CSS',
    NPM: 'npm',
    NODE: 'node',
    BABEL: 'babel',
    SESSIONSTORAGE: 'SessionStorage',
    LATEX: 'LaTeX',
    REACTNATIVE: 'react-native',
    ANDROID: 'android',
    IOS: 'iOS'
};
var _projects = [{
    title: 'DMCScheduler.py',
    desc: 'is a nurse rostering tool written for the nurses of Doctor\'s Medical Center of Modesto.',
    techs: [TechnologiesEnum.PYTHON3, TechnologiesEnum.JAVASCRIPT, TechnologiesEnum.TABULATOR, TechnologiesEnum.WEBSOCKET, TechnologiesEnum.HTML, TechnologiesEnum.CSS],
    url: 'https://github.com/johnrichardrinehart/DMCScheduler.py',
    status: 'Stable'
}, {
    title: 'website',
    desc: 'is the repository containing the development of my personal website.',
    techs: [TechnologiesEnum.REACT, TechnologiesEnum.HTML, TechnologiesEnum.CSS, TechnologiesEnum.NPM, TechnologiesEnum.NODE, TechnologiesEnum.BABEL, TechnologiesEnum.SESSIONSTORAGE],
    url: 'https://github.com/johnrichardrinehart/website',
    status: 'Stable'
}, {
    title: 'gotex',
    desc: 'is a project that seeks to provide real-time compilation of LaTeX documents tracked in Git repositories and provide a convenient analysis frontend for changes to the LaTeX document.',
    techs: [TechnologiesEnum.JAVASCRIPT, TechnologiesEnum.WEBSOCKET, TechnologiesEnum.GOLANG, TechnologiesEnum.LATEX],
    url: 'https://github.com/johnrichardrinehart/gotex',
    status: 'Stable'
}, {
    title: 'IEC',
    desc: 'is a cross-platform mobile application designed to streamline operations for Industrial Electrical Company of Modesto, California.',
    techs: [TechnologiesEnum.REACT, TechnologiesEnum.REACTNATIVE, TechnologiesEnum.ANDROID, TechnologiesEnum.IOS],
    url: 'https://github.com/johnrichardrinehart/IEC',
    status: 'Stable'
}];
var ProjectTile = function ProjectTile(_ref) {
    var title = _ref.title,
        desc = _ref.desc,
        url = _ref.url,
        techs = _ref.techs,
        status = _ref.status;

    return React.createElement(
        'div',
        { 'class': 'card' },
        React.createElement(
            'span',
            { 'class': 'title' },
            title
        ),
        React.createElement(
            'span',
            { 'class': 'desc-container' },
            React.createElement(
                'p',
                { 'class': 'desc-text' },
                React.createElement(
                    'p',
                    { 'class': 'desc' },
                    React.createElement(
                        'b',
                        null,
                        title,
                        '\xA0'
                    ),
                    desc
                ),
                React.createElement(
                    'p',
                    { 'class': 'footnote-container' },
                    React.createElement(
                        'p',
                        { 'class': 'footnote status' },
                        React.createElement(
                            'b',
                            null,
                            'Status: '
                        ),
                        status,
                        ' '
                    ),
                    React.createElement(
                        'p',
                        { 'class': 'footnote technologies' },
                        React.createElement(
                            'b',
                            null,
                            'Technologies: \xA0\xA0'
                        ),
                        React.createElement(
                            'p',
                            null,
                            techs.length > 0 ? techs.map(function (x) {
                                return React.createElement(
                                    'u',
                                    null,
                                    x
                                );
                            }).reduce(function (p, c) {
                                return [, p, ', ', c];
                            }) : ''
                        )
                    )
                )
            ),
            React.createElement(
                'p',
                { 'class': 'desc-link' },
                React.createElement(
                    'a',
                    { href: url },
                    React.createElement('img', { src: 'assets/GitHub-Mark/PNG/GitHub-Mark-64px.png', alt: 'GitHub' })
                )
            )
        )
    );
};

var ProjectsContainer = function ProjectsContainer() {
    return React.createElement(
        'div',
        null,
        _projects.map(function (x) {
            return React.createElement(ProjectTile, x);
        })
    );
};

var domContainer = document.querySelector('#projects_container');
ReactDOM.render(e(ProjectsContainer), domContainer);