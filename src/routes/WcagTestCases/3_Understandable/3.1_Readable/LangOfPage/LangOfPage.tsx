import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";
import { useEffect } from "react";

interface Props {
  pageTitle: string;
}

export const LangOfPage = (props: Props) => {
  useEffect(() => {
    document.documentElement.lang = "";
  });
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"html element has an empty lang attribute"}
          successCriterionInWords={"Language of Page"}
          level={Level.A}
          successCriterionNumber={"3.1.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-page"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/html/H57.html"
          }
          id={"3.1.1_1"}
        >
          <p>This page has an empty lang attribute: "html lang".</p>
        </TestCase>
      </Frame>
    </>
  );
};
