import { FC, useEffect, useState } from "react";
import { Banner } from "../Banner/Banner";
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
      <Banner pageTitle={pageTitle} />
      <div className={"main__wrapper"}>
        <Navigation />
        <main className={"main__content"}>
          <section>
            <header>
              <h1 className={"main__heading"}>{pageTitle}</h1>
              <p className={"main__case-count"}>
                Number of Test Cases: {numberOfTestCases}
              </p>
            </header>
            {children}
          </section>
        </main>
      </div>
    </>
  );
};
