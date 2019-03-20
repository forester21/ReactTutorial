import React, {Component} from "react"

class Btn extends Component{

    render() {
        return (
            <div>
                <button onClick={this.props.method}>Click Me!</button>
            </div>
        );
    }
}

class App extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0
        };
        this.inc = this.inc.bind(this);
    }

    inc() {
        this.setState(curr => {
            return {
                counter: curr.counter + 1
            }
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <Btn method={this.inc}/>
            </div>
        )
    }
}

export default App