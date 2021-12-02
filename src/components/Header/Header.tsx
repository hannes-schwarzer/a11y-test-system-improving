import { Link } from "react-router-dom";
import ALLYUP from "../../assets/AllyUp.png";
import "./Header.css";

interface HeaderProps {
  pageTitle: string;
}

export const Header = (headerProps: HeaderProps) => {
  document.title = headerProps.pageTitle;
  return (
    <>
      <header className={"global-header"} id={"globalHeader"} role={"banner"}>
        <Link to="/">
          <img
            src={ALLYUP}
            alt={"Ally up logo"}
            className="header__logo"
            height={"100px"}
            width={"auto"}
          />
        </Link>
        <h1 className={"main-heading"}>{headerProps.pageTitle}</h1>
      </header>
    </>
  );
};
