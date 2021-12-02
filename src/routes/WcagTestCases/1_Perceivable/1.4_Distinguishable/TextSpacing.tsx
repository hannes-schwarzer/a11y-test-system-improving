import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const TextSpacing = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Inadequate line height used"}
          successCriterionInWords={"Text Spacing"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#text-spacing"
          }
          successCriterionNumber={"1.4.12"}
          level={Level.AA}
        >
          <p className={"line-height"}>
            Many people with cognitive disabilities have trouble tracking lines
            of text when a block of text is single spaced. Providing spacing
            between 1.5 to 2 allows them to start a new line more easily once
            they have finished the previous one.
          </p>
        </TestCase>
        <TestCase
          title={"Links not separated by printable characters"}
          successCriterionInWords={"Text Spacing"}
          successCriterionNumber={"1.4.12"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#text-spacing"
          }
          level={Level.AA}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
          }
        >
          <a href={"a.html"}>Page A</a>
          <a href={"b.html"}>Page B</a>
          <a href={"c.html"}>Page C</a>
        </TestCase>
      </Frame>
    </>
  );
};
