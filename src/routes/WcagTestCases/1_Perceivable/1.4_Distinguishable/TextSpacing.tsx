import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const TextSpacing = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={"Inadequate line height used"}
          successCriterion={"1.4.12 Text Spacing"}
          serial={1}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#text-spacing"
          }
          guideline={"1.4.12"}
          level={Level.AA}
        >
          <p className={"line-height"}>
            Many people with cognitive disabilities have trouble tracking lines
            of text when a block of text is single spaced. Providing spacing
            between 1.5 to 2 allows them to start a new line more easily once
            they have finished the previous one.
          </p>
        </GuidelineError>
        <GuidelineError
          title={"Links not separated by printable characters"}
          successCriterion={"1.4.12 Text Spacing"}
          serial={2}
          guideline={"1.4.12"}
          linkToGuideline={
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
        </GuidelineError>
      </Frame>
    </>
  );
};
