import { BrowserRouter, Route, Routes } from "react-router-dom";
import { componentRoutes } from "./componentRoutes";

export const Router = () => {
  const routeComponents = componentRoutes.map(
    ({ path, name, component }, key) => {
      return <Route path={path} key={key} element={component} />;
    }
  );

  return (
    <BrowserRouter>
      <Routes>{routeComponents}</Routes>
    </BrowserRouter>
  );
};
