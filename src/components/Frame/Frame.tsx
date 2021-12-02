import { FC } from "react";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";

import "./Frame.css";

type FrameProps = {
  pageTitle: string;
};

export const Frame: FC<FrameProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Header pageTitle={pageTitle} />
      <div className={"main__wrapper"}>
        <Navigation />
        <main className={"main__content"}>
          <section className={"middle-section"}>
            <h2 className={"main__heading"}>{pageTitle}</h2>
            {children}
          </section>
        </main>
      </div>
    </>
  );
};
