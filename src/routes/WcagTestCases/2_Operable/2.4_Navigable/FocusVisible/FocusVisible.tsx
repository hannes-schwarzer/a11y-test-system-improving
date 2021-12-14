import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import LINK from "../../../../../assets/link.png";
import "./FocusVisible.css";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const FocusVisible = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received"
          }
          successCriterionInWords={"Focus Visible"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#focus-visible"
          }
          successCriterionNumber={"2.4.7"}
          level={Level.AA}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html"
          }
          explanation={
            "Content that normally receives focus when the content is accessed by keyboard may have this " +
            "focus removed by scripting. This is sometimes done when designer considers the system focus indicator to be " +
            "unsightly. However, the system focus indicator is an important part of accessibility for keyboard users. " +
            "In addition, this practice removes focus from the content entirely, which means that the content can only be " +
            "operated by a pointing device such as a mouse."
          }
          id={"2.4.7_1"}
        >
          <input
            id={"keyboard__blur-error-first"}
            type="submit"
            onFocus={() => {
              document!.getElementById("keyboard__blur-error-first")!.blur();
            }}
          />
        </TestCase>

        <TestCase
          title={
            "F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received"
          }
          successCriterionInWords={"Focus Visible"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#focus-visible"
          }
          successCriterionNumber={"2.4.7"}
          level={Level.AA}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html"
          }
          explanation={
            "Content that normally receives focus when the content is accessed by keyboard may have this " +
            "focus removed by scripting. This is sometimes done when designer considers the system focus indicator to be " +
            "unsightly. However, the system focus indicator is an important part of accessibility for keyboard users. " +
            "In addition, this practice removes focus from the content entirely, which means that the content can only be " +
            "operated by a pointing device such as a mouse."
          }
          id={"2.4.7_2"}
        >
          <a
            id={"keyboard__blur-error-second"}
            onFocus={() => {
              document!.getElementById("keyboard__blur-error-second")!.blur();
            }}
            href="/some-page"
          >
            <img src={LINK} />
          </a>
        </TestCase>

        <TestCase
          title={
            "F78: Failure of Success Criterion 1.4.11 and 2.4.7 due to styling element outlines and borders in a way that " +
            "removes or renders non-visible the visual focus indicator"
          }
          successCriterionInWords={"Focus Visible"}
          explanation={
            "The focus indicator is turned off with CSS: The following CSS example will remove the default focus indicator, " +
            "which fails the requirement to provide a visible focus indicator."
          }
          level={Level.AA}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F78.html"
          }
          successCriterionNumber={"2.4.7"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#focus-visible"
          }
          id={"2.4.7_3"}
        >
          <a href={"/some-page"} className={"focus-visibility__no-focus"}>
            Link with no visible focus to some page
          </a>
        </TestCase>

        <TestCase
          title={
            "F78: Failure of Success Criterion 1.4.11 and 2.4.7 due to styling element outlines and borders in a way that " +
            "removes or renders non-visible the visual focus indicator"
          }
          successCriterionInWords={"Focus Visible"}
          explanation={
            "The outline of elements is visually similar to the focus indicator: The following CSS example will create an " +
            "outline around links that looks the same as the focus indicator. This makes it impossible for users to " +
            "determine which one in fact has the focus, even though the user agent does draw the focus indicator."
          }
          level={Level.AA}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F78.html"
          }
          successCriterionNumber={"2.4.7"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#focus-visible"
          }
          id={"2.4.7_4"}
        >
          <a
            href={"somepage.html"}
            className={"nontextconstrast__constant-dotted-focus"}
          >
            Link to some page
          </a>
        </TestCase>

        <TestCase
          title={
            "F78: Failure of Success Criterion 1.4.11 and 2.4.7 due to styling element outlines and borders in a way that " +
            "removes or renders non-visible the visual focus indicator"
          }
          successCriterionInWords={"Focus Visible"}
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
          successCriterionNumber={"2.4.7"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#focus-visible"
          }
          id={"2.4.7_5"}
        >
          <a
            href={"somepage.html"}
            className={"nontextconstrast__constant-medium-focus"}
          >
            Link to some page
          </a>
        </TestCase>
        <TestCase
          title={"Focus not visible: Removed by css style"}
          successCriterionInWords={"Focus Visible"}
          level={Level.AA}
          successCriterionNumber={"2.4.7"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#focus-visible"
          }
          id={"2.4.7_6"}
        >
          <a className={"not-visible-outline-link"} href={"#"}>
            This link has visible focus
          </a>{" "}
          but this button{" "}
          <button className={"not-visible-outline-button"}>Search</button>{" "}
          doesn't.
        </TestCase>
      </Frame>
    </>
  );
};
