import { Link } from "react-router-dom";
import "./NavLink.css";

interface Props {
  className: string;
  path: string;
  name: string;
  key: number;
}

export const NavLink = ({ key, className, path, name }: Props) => {
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
        <Link className={className} to={path} key={key}>
          {name}
        </Link>
      </li>
    </>
  );
};
