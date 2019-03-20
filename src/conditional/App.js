import React, {Component} from 'react'

class App extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 1500);
    }

    render() {
        return (
            <Conditional isLoading={this.state.isLoading}/>
        )
    }
}

function Conditional(props) {
    return (
        <div>{props.isLoading === true ?
            <h1>Loading...</h1> :
            <h1>Done!</h1>}
        </div>)
}

export default App