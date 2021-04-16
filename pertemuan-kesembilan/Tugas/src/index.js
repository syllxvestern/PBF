  import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

import BlogPost from "./Container/BlogPost/BlogPost";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BlogPost />,
  document.getElementById("content")
);