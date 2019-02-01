var e = React.createElement;

var ProjectTile = function ProjectTile(_ref) {
    var title = _ref.title;

    return React.createElement(
        "div",
        { "class": "card" },
        React.createElement(
            "p",
            { "class": "title" },
            title
        )
    );
};

var ProjectsContainer = function ProjectsContainer() {
    return React.createElement(
        "div",
        null,
        React.createElement(ProjectTile, { title: "Some Words" }),
        React.createElement(ProjectTile, { title: "Some Other Words" })
    );
};

var domContainer = document.querySelector('#projects_container');
ReactDOM.render(e(ProjectsContainer), domContainer);