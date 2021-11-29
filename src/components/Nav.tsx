import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <ul className="nav__item-wrapper">
            <li className="nav__item">
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/wcag">WCAG Test Suite</Link>
            </li>
            <li className="nav__item">
              <Link to={"/wcag/perceivable"}>Perceivable</Link>
            </li>
            <li className="nav__item">
              <Link to={"/wcag/operable"}>Operable</Link>
            </li>
            <li className="nav__item">
              <Link to={"/wcag/understandable"}>Understandable</Link>
            </li>
            <li className="nav__item">
              <Link to={"/wcag/robust"}>Robust</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
