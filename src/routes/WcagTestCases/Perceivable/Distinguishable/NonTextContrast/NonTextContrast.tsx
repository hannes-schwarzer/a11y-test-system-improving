import { Level, TestCase } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";
import "./NonTextContrast.css";

interface Props {
  pageTitle: string;
}

export const NonTextContrast = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F78: Failure of Success Criterion 1.4.11 and 2.4.7 due to styling element outlines and borders in a way " +
            "that removes or renders non-visible the visual focus indicator"
          }
          successCriterionInWords={"Non-text Contrast"}
          explanation={
            "The focus indicator is turned off with CSS: The following CSS example will remove the default focus indicator, " +
            "which fails the requirement to provide a visible focus indicator."
          }
          level={Level.AA}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F78.html"
          }
          successCriterionNumber={"1.4.11"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast"
          }
          id={"1.4.11_1"}
        >
          <a href={"/some-page"} className={"non-text-constrast__no-focus"}>
            Link to some page
          </a>
        </TestCase>

        <TestCase
          title={
            "F78: Failure of Success Criterion 1.4.11 and 2.4.7 due to styling element outlines and borders in a way that " +
            "removes or renders non-visible the visual focus indicator"
          }
          successCriterionInWords={"Non-text Contrast"}
          explanation={
            "The outline of elements is visually similar to the focus indicator: The following CSS example will create an " +
            "outline around links that looks the same as the focus indicator. This makes it impossible for users to " +
            "determine which one in fact has the focus, even though the user agent does draw the focus indicator."
          }
          level={Level.AA}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F78.html"
          }
          successCriterionNumber={"1.4.11"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast"
          }
          id={"1.4.11_2"}
        >
          <a
            href={"/some-page"}
            className={"non-text-constrast__constant-dotted-focus"}
          >
            Link to some page
          </a>
        </TestCase>

        <TestCase
          title={
            "F78: Failure of Success Criterion 1.4.11 and 2.4.7 due to styling element outlines and borders in a way that " +
            "removes or renders non-visible the visual focus indicator"
          }
          successCriterionInWords={"Non-text Contrast"}
          explanation={
            "Elements have a border that occludes the focus indicator: The following CSS example creates a border around " +
            "links that does not have enough contrast for the focus indicator to be seen when drawn on top of it. In " +
            "this case the focus indicator is drawn just ouside the border, but as both are black and the border is " +
            "thicker than the focus indicator, it no longer meets the definition of 'visible'."
          }
          level={Level.AA}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F78.html"
          }
          successCriterionNumber={"1.4.11"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast"
          }
          id={"1.4.11_3"}
        >
          <a
            href={"/some-page"}
            className={"non-text-constrast__constant-medium-focus"}
          >
            Link to some page
          </a>
        </TestCase>

        <TestCase
          title={"Button with low contrast to background"}
          successCriterionInWords={"Non-text Contrast"}
          explanation={
            "This button (and several others) appears on the quick reference of the WCAG. It succeeds the text contrast criterium with a constrast of 6.15 but fails the non-text contrast with a contrast of 1.31"
          }
          level={Level.AA}
          successCriterionNumber={"1.4.11"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast"
          }
          linkToExplanation={"https://www.aditus.io/button-contrast-checker/"}
          id={"1.4.11_4"}
        >
          <button
            type={"button"}
            className={"non-text-constrast__low-contrast-button"}
          >
            Show About & How to Use
          </button>
        </TestCase>
      </Frame>
    </>
  );
};
