import { FC, useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";

import "./Frame.css";

type FrameProps = {
  pageTitle: string;
};

export const Frame: FC<FrameProps> = ({ pageTitle, children }) => {
  const [numberOfTestCases, setNumberOfTestCases] = useState(0);
  useEffect(() => {
    setNumberOfTestCases(document.getElementsByClassName("testCase").length);
  });
  return (
    <>
      <Header pageTitle={pageTitle} />
      <div className={"main__wrapper"}>
        <Navigation />
        <main className={"main__content"}>
          <section>
            <h2 className={"main__heading"}>
              Number of Test Cases: {numberOfTestCases}
            </h2>
            {children}
          </section>
        </main>
      </div>
    </>
  );
};
