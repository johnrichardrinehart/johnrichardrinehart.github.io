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
  CANVAS: `HTML Canvas API`
};

export default [
  {
    title: "DMCScheduler.py",
    desc: `is a nurse rostering tool written for the nurses of Doctor's Medical Center of Modesto.`,
    techs: [
      TechnologiesEnum.PYTHON3,
      TechnologiesEnum.JAVASCRIPT,
      TechnologiesEnum.TABULATOR,
      TechnologiesEnum.WEBSOCKET,
      TechnologiesEnum.HTML,
      TechnologiesEnum.CSS
    ],
    projectURL: `https://github.com/johnrichardrinehart/DMCScheduler.py`,
    githubURL: `https://github.com/johnrichardrinehart/DMCScheduler.py`,
    status: `Stable`
  },
  {
    title: "website",
    desc: `is the repository containing the development of my personal website.`,
    techs: [
      TechnologiesEnum.REACT,
      TechnologiesEnum.HTML,
      TechnologiesEnum.CSS,
      TechnologiesEnum.NPM,
      TechnologiesEnum.NODE,
      TechnologiesEnum.BABEL,
      TechnologiesEnum.SESSIONSTORAGE
    ],
    githubURL: `https://github.com/johnrichardrinehart/website`,
    projectURL: `https://github.com/johnrichardrinehart/website`,
    status: `Stable`
  },
  {
    title: "gotex",
    desc: `is a project that seeks to provide real-time compilation of LaTeX documents tracked in Git repositories and provide a convenient analysis frontend for changes to the LaTeX document.`,
    techs: [
      TechnologiesEnum.JAVASCRIPT,
      TechnologiesEnum.WEBSOCKET,
      TechnologiesEnum.GOLANG,
      TechnologiesEnum.LATEX
    ],
    githubURL: `https://github.com/johnrichardrinehart/gotex`,
    projectURL: `https://github.com/johnrichardrinehart/gotex`,
    status: `Stable`
  },
  {
    title: "IEC",
    desc: `is a cross-platform mobile application designed to streamline operations for Industrial Electrical Company of Modesto, California.`,
    techs: [
      TechnologiesEnum.REACT,
      TechnologiesEnum.REACTNATIVE,
      TechnologiesEnum.ANDROID,
      TechnologiesEnum.IOS
    ],
    githubURL: `https://github.com/johnrichardrinehart/IEC`,
    projectURL: `https://github.com/johnrichardrinehart/IEC`,
    status: `Stable`
  },
  {
    title: "pong.js",
    desc: `is a vanilla JavaScript implemenation of the classic arcade game Pong.`,
    techs: [
      TechnologiesEnum.JAVASCRIPT,
      TechnologiesEnum.CSS,
      TechnologiesEnum.HTML,
      TechnologiesEnum.CANVAS
    ],
    githubURL: `https://github.com/johnrichardrinehart/pong.js`,
    projectURL: `/pong`,
    status: `Stable`
  }
];
