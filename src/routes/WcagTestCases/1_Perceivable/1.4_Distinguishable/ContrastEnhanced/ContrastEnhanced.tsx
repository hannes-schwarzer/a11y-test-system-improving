import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import "./ContrastEnhanced.css";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ContrastEnhanced = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          level={Level.AAA}
          title={
            "F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without " +
            "specifying background colors or vice versa"
          }
          successCriterionInWords={"Contrast (Enhanced)"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced"
          }
          successCriterionNumber={"1.4.6"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html"
          }
          explanation={
            "Specifying only background color with CSS: In the example below the background color is defined on the " +
            "CSS stylesheet, however the foreground color is not defined. Therefore, the example fails the Success " +
            "Criterion."
          }
        >
          <p className={"contrast-enhanced__whiteBackground"}>
            My background is white.
          </p>
        </TestCase>

        <TestCase
          level={Level.AAA}
          title={
            "F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without " +
            "specifying background colors or vice versa"
          }
          successCriterionInWords={"Contrast (Enhanced)"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced"
          }
          successCriterionNumber={"1.4.6"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html"
          }
          explanation={
            "Specifying only foreground color with CSS: In the example below the foreground color is defined" +
            " on the CSS stylesheet, however the background color is not defined. Therefore, the example fails the Success " +
            "Criterion."
          }
        >
          <p className={"contrast-enhanced__whiteForeground"}>
            My foreground is white.
          </p>
        </TestCase>

        <TestCase
          title={
            "Small text does not have a contrast ratio of at least 7:1 so does not meet AAA"
          }
          successCriterionInWords={"Contrast (Enhanced)"}
          successCriterionNumber={"1.4.6"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced"
          }
          level={Level.AAA}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/general/G17.html"
          }
        >
          <p className={"contrast-enhanced__low-contrast-small-aaa"}>
            This small text does not have enough contrast with it's background
          </p>
        </TestCase>

        <TestCase
          title={
            "Large text does not have a contrast ratio of at least 4.5:1 so does not meet AAA"
          }
          successCriterionInWords={"Contrast (Enhanced)"}
          successCriterionNumber={"1.4.6"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced"
          }
          level={Level.AAA}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/general/G17.html"
          }
        >
          <p className={"contrast-enhanced__low-contrast-large-aaa"}>
            This large text does not have enough contrast with it's background
          </p>
        </TestCase>
      </Frame>
    </>
  );
};
