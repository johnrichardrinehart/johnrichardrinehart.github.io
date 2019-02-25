import React from 'react';
import ReactDOM from 'react-dom';
import randomColor from 'randomcolor';
import projects from './projects.jsx';


var e = React.createElement;

class ProjectTile extends React.Component {
    constructor(props) {
        super(props);
        this.setButtonHovered = this.setButtonHovered.bind(this);
        this.state = { backgroundColor: this.props.color };
    }

    addHexColor(c1, c2) {
        const rgb1 = c1.substr(1).match(/.{1,2}/g); // https://stackoverflow.com/questions/7033639/split-large-string-in-n-size-chunks-in-javascript
        const rgb2 = c2.substr(1).match(/.{1,2}/g);
        const result = rgb1.map((c, i) => {
            const res = parseInt(c, 16) + parseInt(rgb2[i], 16)
            if (res < 0) {
                return '00'
            } else if (res > 0xFF) {
                return 'FF'
            }
            return res.toString(16)
        })
        return '#' + result.join('')
    }

    setButtonHovered(b) {
        this.addHexColor(this.props.color, this.props.color)

        if (this.state.backgroundColor !== this.props.color) {
            this.setState({ backgroundColor: this.props.color })
            return
        }
        this.setState({ backgroundColor: this.addHexColor(this.props.color, '#101010') })
    }

    render() {
        const style = {
            backgroundColor: this.state.backgroundColor,
        }

        return (
            <div class="card" style={style} onMouseEnter={this.setButtonHovered} onMouseLeave={this.setButtonHovered} >
                <a href={this.props.projectURL} class="title">
                    {this.props.title}
                </a>
                <span class="desc-container">
                    <p class="desc-text">
                        <p class="desc"><b>{this.props.title}&nbsp;</b>{this.props.desc}</p>
                        <p class="footnote-container">
                            <p class="footnote status"><b>Status: </b>{this.props.status} </p>
                            <p class="footnote technologies"><b>Technologies: &nbsp;&nbsp;</b>
                                <p>
                                    {
                                        this.props.techs.length > 0 ? this.props.techs
                                            .map(x => (<u>{x}</u>))
                                            .reduce((p, c) => [, p, ', ', c])
                                            : ''}
                                </p>
                            </p>
                        </p>
                    </p>
                    <p class="desc-link">
                        <a href={this.props.githubURL}>
                            <img src="assets/GitHub-Mark/PNG/GitHub-Mark-64px.png" alt="GitHub" />
                        </a>
                    </p>
                </span>
            </div>
        )
    }
};

var ProjectsContainer = function ProjectsContainer() {
    return (
        <div>
            {projects.map(x => {
                x.color = randomColor();
                return <ProjectTile {...x} />
            })}
        </div>
    )
};

var domContainer = document.querySelector('#projects_container');
ReactDOM.render(e(ProjectsContainer), domContainer);