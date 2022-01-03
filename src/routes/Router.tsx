import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import { routes } from "./routes";
import { useEffect } from "react";
import axe from "axe-core";

export const Router = () => {
  useEffect(() => {
    /**
     * implementation of axe-core API
     */
    axe
      .run()
      .then((results) => {
        if (results.violations.length || results.incomplete.length) {
          console.log(results);
        }
      })
      .catch((err) => {
        console.error("axe-core error:", err.message);
      });
  });

  const routeComponents = routes.map(
    ({ path, name, component, className }, key) => {
      if (
        className === "nav__link" ||
        className === "nav__homepage" ||
        className === "detail-page"
      ) {
        return <Route path={path} key={key} element={component} />;
      } else return null;
    }
  );

  return (
    <BrowserRouter>
      <Routes>{routeComponents}</Routes>
    </BrowserRouter>
  );
};
