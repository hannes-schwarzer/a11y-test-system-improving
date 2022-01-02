import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./routes/Router";
import "./index.css";

/**
 * Use @axe-core/react for each navigated path
 * */
if (process.env.NODE_ENV !== "production") {
  //For Development
  import("@axe-core/react").then((axe) => {
    axe.default(React, ReactDOM, 1000);
    ReactDOM.render(
      <React.StrictMode>
        <Router />
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
} else {
  //For Production
  ReactDOM.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
