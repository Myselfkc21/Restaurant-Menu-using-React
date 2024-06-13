import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const Global=createGlobalStyle`
*{
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}
body{
  background-color: #D2B48C;
  color: #4B3F3B;
  min-height: 100vh;
}
`
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Global/>
    <App />
  </React.StrictMode>
);
