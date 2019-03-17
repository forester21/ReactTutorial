import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
    return (
        <div>
            <h1 style={{color:'blue'}}>forester</h1>
            <p>I'm here</p>
        </div>);
}

ReactDOM.render(<MyInfo/>, document.getElementById("root"));