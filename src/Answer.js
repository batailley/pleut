import React, {Component} from 'react';

export default class Answer extends Component {
    render() {
        return <div className="boolean-answer">{this.props.raining ? "Oui.": "Non."}</div>
    }
}