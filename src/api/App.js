import React, {Component} from 'react'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name : 'null',
            loaded : false
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/1')
            .then(response => response.json())
            .then(person => this.setState(
                {
                    name : person.name,
                    loaded : true
                }
            ));
    }

    render() {
        return (
            <div>
                <h1>{this.state.loaded ? this.state.name : "Ждите-с"}</h1>
            </div>
        );
    }
}

export default App