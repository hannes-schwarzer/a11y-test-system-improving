import "./Banner.css";
import { useEffect } from "react";

interface HeaderProps {
  pageTitle: string;
}

export const Banner = (headerProps: HeaderProps) => {
  useEffect(() => {
    document.title = headerProps.pageTitle;
    document.documentElement.lang = "en";
  });
  return (
    <>
      <div className={"global-banner"} role={"banner"}>
        <div id={"logo"}>
          <span id={"logo__top"}>a11y</span>
          <span id={"logo__bottom"}>up</span>
        </div>
        {/*<h1 className={"main-heading"}>{headerProps.pageTitle}</h1>*/}
      </div>
    </>
  );
};
