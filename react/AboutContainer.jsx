import React from 'react';
import ReactDOM from 'react-dom';

var e = React.createElement;

class AboutContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card-container">
                <div class="card">
                    <p> TL;DR I'm a passionate engineer and web developer looking to improve the world using the latest technologies.</p>
                </div>
            </div>
        )
    }
};

var domContainer = document.querySelector('#about_container');
ReactDOM.render(e(AboutContainer), domContainer);