import React, {Component} from 'react';
import * as CounterService from "./CounterService";

class ComponentA extends Component {
    render() {
        return (
            <div style={{border: "1px solid red"}}>
                <p>Component A</p>
                <button onClick={() => CounterService.setCount(CounterService.getCount() + 1)}>Count</button>
            </div>
        );
    }
}

export default ComponentA;
