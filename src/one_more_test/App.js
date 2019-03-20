import React, {Component} from "react"

class App extends Component {
    constructor() {
        super();
        this.state = {
            name : "FORESTER",
            age : 22,
            isLogged : true
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3><font color="#3AC1EF">▍{this.state.age} years old</font></h3>
                <h2>You're currently logged {this.state.isLogged ? 'on' : 'off'}</h2>
            </div>
        )
    }
}

export default App