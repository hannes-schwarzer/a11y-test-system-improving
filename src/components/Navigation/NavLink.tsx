import { Link } from "react-router-dom";
import "./NavLink.css";

interface Props {
  className: string;
  path: string;
  name: string;
}

export const NavLink = ({ className, path, name }: Props) => {
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
