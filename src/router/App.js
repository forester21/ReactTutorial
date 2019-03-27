import React from 'react'
import {Switch, Route, Link} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
};

const Header = () => {
    return (
        <div>
            <Link to='/'>HOME</Link>
            <br/>
            <Link to='/sec/1'>GOTO_SEC1</Link>
            <br/>
            <Link to='/sec/2'>GOTO_SEC2</Link>
        </div>
    )
};

const Main = () => {
    return(
        <Switch>
            <Route exact path='/' component={First}/>
            <Route path='/sec/:id' component={Second}/>
        </Switch>
    )
};

const First = () => {
    return(
        <div>
            <h1>First</h1>
        </div>
    )
};

const Second = (props) => {
    return(
        <div>
            <h1>Second, {props.match.params.id}</h1>
        </div>
    )
};

export default App