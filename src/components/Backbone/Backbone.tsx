import { FC } from "react";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";

import "./Backbone.css";

type BackboneProps = {
  pageTitle: string;
};

export const Backbone: FC<BackboneProps> = ({ pageTitle, children }) => {
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
