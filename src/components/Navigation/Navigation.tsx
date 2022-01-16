import { routes } from "../../routes/routes";
import { NavLink } from "./NavLink";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { FC, KeyboardEvent } from "react";

export const Navigation: FC = () => {
  const pathsToTestCases = routes.map(({ className, path, name }) => {
    if (
      className === "nav__link" ||
      className === "nav__homepage" ||
      className === "detail-page"
    ) {
      return (
        <NavLink
          className={className}
          path={path}
          name={name}
          key={`${name}_${path}`}
        />
      );
    } else
      return (
        <li className={className} key={`${name}_${path}`}>
          {name}
        </li>
      );
  });

  const focusOnMain = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter" && document.getElementById("main")) {
      document.getElementById("main")!.focus();
    }
  };

  return (
    <>
      <nav className="nav" role={"navigation"}>
        <Link
          to={"#main"}
          id={"skip-to-main"}
          onKeyDown={(event) => focusOnMain(event)}
        >
          Skip to main content
        </Link>
        <ul className="nav__item-wrapper">{pathsToTestCases}</ul>
      </nav>
    </>
  );
};
