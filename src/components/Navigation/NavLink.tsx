import { Link } from "react-router-dom";
import "./NavLink.css";
import { FC } from "react";

interface NavLinkProps {
  className: string;
  path: string;
  name: string;
}

export const NavLink: FC<NavLinkProps> = ({ className, path, name }) => {
  return (
    <>
      <li
        className={className}
        onClick={() => {
          if (document.getElementById("main")) {
            document.getElementById("main")!.scrollIntoView();
          }
        }}
      >
        <Link className={className} to={path} key={`${name}_${path}`}>
          {name}
        </Link>
      </li>
    </>
  );
};
