var e = React.createElement;

var ProjectTile = function ProjectTile(_ref) {
    var title = _ref.title,
        desc = _ref.desc,
        url = _ref.url;

    return React.createElement(
        "div",
        { "class": "card" },
        React.createElement(
            "span",
            { "class": "title" },
            title
        ),
        React.createElement(
            "span",
            { "class": "desc-container" },
            React.createElement(
                "p",
                { "class": "desc-text" },
                desc
            ),
            React.createElement(
                "p",
                { "class": "desc-link" },
                React.createElement(
                    "a",
                    { href: url },
                    React.createElement("img", { src: "assets/GitHub-Mark/PNG/GitHub-Mark-64px.png", alt: "GitHub" })
                )
            )
        )
    );
};

var ProjectsContainer = function ProjectsContainer() {
    return React.createElement(
        "div",
        null,
        React.createElement(ProjectTile, { title: "DMC Scheduler", desc: "DMC Scheduler is a nurse rostering tool written for the nurses of Doctor's Medical Center of Modesto.", url: "https://github.com/johnrichardrinehart/DMCScheduler.py" }),
        React.createElement(ProjectTile, { title: "Some Other Words", desc: "hey" })
    );
};

var domContainer = document.querySelector('#projects_container');
ReactDOM.render(e(ProjectsContainer), domContainer);