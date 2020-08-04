import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/styles.css";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from "react-router-dom";
// import Script from "./components/script";


ReactDOM.render(<BrowserRouter>
<App />
</BrowserRouter>, 
document.getElementById("root")
);