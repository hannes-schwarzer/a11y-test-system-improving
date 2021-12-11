import "./Banner.css";
import { useEffect } from "react";

export const Banner = () => {
  useEffect(() => {
    document.documentElement.lang = "en";
  });
  return (
    <>
      <header className={"global-banner"} role={"banner"}>
        <div id={"logo"}>
          <span id={"logo__top"}>a11y</span>
          <span id={"logo__bottom"}>up</span>
        </div>
      </header>
    </>
  );
};
