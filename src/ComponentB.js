import React, {Component} from 'react';
import * as CounterService from "./CounterService";

class ComponentB extends Component {
    componentDidMount() {
        CounterService.register(this, () => this.forceUpdate());
    }

    componentWillUnmount() {
        CounterService.unRegister(this);
    }

    render() {
        const total = CounterService.getCount();

        return (
            <div style={{border: "1px solid blue"}}>
                <p>Component B</p>
                <label>Total: </label><span>{total}</span>
            </div>
        );
    }
}

export default ComponentB;
