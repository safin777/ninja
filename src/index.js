import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Nav from "./Components/Nav";
import Basic from "./Components/Basic"
import ClassCom from "./Components/ClassCom";


ReactDOM.render(
    <React.StrictMode>
        <Nav/>
        <Basic locale="bn-BD"/>
        <ClassCom/>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
