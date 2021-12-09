import { componentRoutes } from "../../routes/componentRoutes";
import { NavLink } from "./NavLink";
import "./Navigation.css";

export const Navigation = () => {
  const pathsToTestCases = componentRoutes.map(
    ({ className, path, name }, key) => {
      return (
        <NavLink className={className} path={path} name={name} key={key} />
      );
    }
  );
  return (
    <>
      <nav className="nav">
        <ul className="nav__item-wrapper">{pathsToTestCases}</ul>
      </nav>
    </>
  );
};
