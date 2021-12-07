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
  }, [setNumberOfTestCases]);

  return (
    <>
      <Header pageTitle={pageTitle} />
      <div className={"main__wrapper"}>
        <Navigation />
        <main className={"main__content"}>
          <section>
            <h1 className={"main__heading"}>{pageTitle}</h1>
            <p>Number of Test Cases: {numberOfTestCases}</p>
            {children}
          </section>
        </main>
      </div>
    </>
  );
};
