import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

// import App from "./App"
// import App from "./one_more_test/App"
// import AppTodo from "./todo_list/AppTodo"
// import App from "./counter/App"
// import AppClass from "./useClass/AppClass
// import App from "./conditional/App"
// import App from "./conditional2/App"
// import App from "./api/App"
// import App from "./form/App"
import App from "./router/App"
import {BrowserRouter} from "react-router-dom";
// import {createHashHistory} from 'history'


// ReactDOM.render(<App/>, document.getElementById("root"));
// ReactDOM.render(<AppTodo/>, document.getElementById("root"));
// ReactDOM.render(<AppClass/>, document.getElementById("root"));

// const history = createHashHistory();

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
);