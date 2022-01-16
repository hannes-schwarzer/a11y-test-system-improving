import { FC, useEffect, useState } from "react";
import { Banner } from "../Banner/Banner";
import { Navigation } from "../Navigation/Navigation";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Banner />
      <div className={"main__wrapper"}>
        <Navigation />
        <main className={"main__content"} id={"main"} tabIndex={-1}>
          <h1 className={"main__heading"}>{pageTitle}</h1>
          <p className={"main__case-count"}>
            Number of Test Cases: {numberOfTestCases}
          </p>
          {children}
        </main>
      </div>
    </>
  );
};
