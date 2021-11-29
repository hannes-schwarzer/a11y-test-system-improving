import { Link } from "react-router-dom";
import ALLYUP from "../assets/AllyUp.png";
import { Nav } from "./Nav";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header id={"globalHeader"}>
        <Link to="/">
          <img
            src={ALLYUP}
            alt={"Ally up logo"}
            className="header__logo"
            height={"100px"}
            width={"auto"}
          />
        </Link>
        <p>A11Y TEST SYSTEM</p>
        <Nav />
      </header>
    </>
  );
};
