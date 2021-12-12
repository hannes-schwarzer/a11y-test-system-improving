import { BrowserRouter, Route, Routes } from "react-router-dom";
import { componentRoutes } from "./componentRoutes";

export const Router = () => {
  const routeComponents = componentRoutes.map(
    ({ path, name, component, className }, key) => {
      if (className === "nav__link") {
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
