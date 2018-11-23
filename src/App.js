import React, {Component} from 'react';
import './App.css';
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ComponentA/>
                <br/>
                <ComponentB/>
            </div>
        );
    }
}

export default App;
