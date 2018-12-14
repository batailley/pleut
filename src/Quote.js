import React, {Component} from 'react';
const words = [
    "des crevettes",
    "des moules",
    "des huitres",
    "des calamars",
    "des poulpes",
    "des Saints-Jacques"
];
const verbs = [
    "visiter un château",
    "faire du flan en terrasse"
];
export default class Quote extends Component {
    getTextQuote(raining) {
        if (raining) {
            return "il pleut actuellement "+ words[Math.floor(Math.random()*words.length)];
        } else {
            return "tu peut "+ verbs[Math.floor(Math.random()*verbs.length)];
        }
    }
    render() {
        return <div className={"subtext-answer "+ this.props.raining ? "raining": "sunny"}>
            {this.getTextQuote(this.props.raining)}
        </div>
    }
}