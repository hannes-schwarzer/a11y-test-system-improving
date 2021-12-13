import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import { routes } from "./routes";

export const Router = () => {
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
