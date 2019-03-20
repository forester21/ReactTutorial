import React, {Component} from 'react'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
    }

    toggleLogged = () => {
        this.setState(prev => {
            prev.isLogged = !prev.isLogged;
            return prev;
        })
    };

    render() {
        return (
            <div>
                <Header isLogged={this.state.isLogged}/>
                <Button isLogged={this.state.isLogged} toggleLogged={this.toggleLogged}/>
            </div>
        )
    }
}

function Header(props) {
    return(
        <h1>{props.isLogged ? "Вошел" : "Вышел"}</h1>
    )
}

function Button(props) {
    return(
        <button onClick={props.toggleLogged}>{props.isLogged ? "Выйти" : "Войти"}</button>
    )
}

export default App