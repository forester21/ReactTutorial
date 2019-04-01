import React, {Component} from 'react'

class App extends Component {

    state = {
        name: 'Forester',
        surname: 'Egor',
        age: '21'
    };

    updateInfo = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    };

    render() {
        return (
            <div>
                <form>
                    <input name='name' placeholder='first name' onChange={this.updateInfo}/>
                    <br/>
                    <input name='surname' placeholder='last name' onChange={this.updateInfo}/>
                    <br/>
                    <input name='age' placeholder='age' onChange={this.updateInfo}/>
                    <br/>
                </form>
                <h1>Имя: {this.state.name}</h1>
                <h1>Фамилия: {this.state.surname}</h1>
                <h1>Возраст: {this.state.age}</h1>
            </div>
        );
    }
}

export default App