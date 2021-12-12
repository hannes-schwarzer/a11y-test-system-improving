import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import { componentRoutes } from "./componentRoutes";

export const Router = () => {
  const routeComponents = componentRoutes.map(
    ({ path, name, component, className }, key) => {
      if (className === "nav__link" || className === "nav__homepage") {
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
