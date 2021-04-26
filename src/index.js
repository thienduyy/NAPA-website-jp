import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'fonts/EuclidCircularA-Bold.ttf';
import 'fonts/EuclidCircularA-BoldItalic.ttf';
import 'fonts/EuclidCircularA-Italic.ttf';
import 'fonts/EuclidCircularA-Light.ttf';
import 'fonts/EuclidCircularA-LightItalic.ttf';
import 'fonts/EuclidCircularA-Medium.ttf';
import 'fonts/EuclidCircularA-Regular.ttf';
import 'fonts/EuclidCircularA-SemiBold.ttf';
import 'fonts/EuclidCircularA-SemiBoldItalic.ttf';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
