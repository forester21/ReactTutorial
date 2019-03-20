import React, {Component} from 'react'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            field: "Initial"
        }
    }

    updateField = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div>
                <form>
                    <input name='field'
                           placeholder='qq'
                           type='text'
                           value={this.state.field}
                           onChange={this.updateField}/>
                </form>
                <h1>{this.state.field}</h1>
            </div>
        );
    }
}

export default App