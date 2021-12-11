import { componentRoutes } from "../../routes/componentRoutes";
import { NavLink } from "./NavLink";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { KeyboardEvent } from "react";

export const Navigation = () => {
  const pathsToTestCases = componentRoutes.map(
    ({ className, path, name }, key) => {
      return (
        <NavLink className={className} path={path} name={name} key={key} />
      );
    }
  );

  const focusOnMain = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter") {
      document.getElementById("main")!.focus();
    }
  };

  return (
    <>
      <Link
        to={"#main"}
        id={"skip-to-main"}
        onKeyDown={(event) => focusOnMain(event)}
      >
        Skip to main content
      </Link>
      <nav className="nav">
        <ul className="nav__item-wrapper">{pathsToTestCases}</ul>
      </nav>
    </>
  );
};
