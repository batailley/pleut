import React, {Component} from 'react';
import './App.css';
import Answer from './Answer';
import Quote from './Quote'

class App extends Component {
    state = {
        raining: true
    };
    componentWillMount() {
        this.setState({
            raining: Math.random() >= 0.5
        })
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1 className="page-title">Est-ce qu'il pleut ?</h1>
                    <Answer raining={this.state.raining} />
                    <Quote raining={this.state.raining} />
                </div>
            </div>
        );
    }
}


export default App;
