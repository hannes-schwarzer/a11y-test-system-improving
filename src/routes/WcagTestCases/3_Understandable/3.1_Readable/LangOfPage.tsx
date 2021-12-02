import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const LangOfPage = (props: Props) => {
  document.documentElement.lang = "";

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
        >
          <p>
            Placeholder and Reminder: This page has an empty lang attribute:
            "html lang"
          </p>
        </TestCase>
      </Frame>
    </>
  );
};
