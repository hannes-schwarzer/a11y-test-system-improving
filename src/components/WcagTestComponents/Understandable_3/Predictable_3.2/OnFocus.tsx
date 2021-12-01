import { GuidelineError, Level } from "../../../GuidelineError";
import LINK from "../../../../assets/link.png";
import "./OnFocus.css";

export const OnFocus = () => {
  return (
    <>
      <GuidelineError
        title={
          "F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received"
        }
        successCriterion={"3.2.1 On Focus"}
        serial={1}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#on-focus"}
        guideline={"3.2.1"}
        level={Level.A}
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
      >
        <input
          id={"keayboard__blur-error-first"}
          type="submit"
          onFocus={() => {
            document!.getElementById("keayboard__blur-error-first")!.blur();
          }}
        />
      </GuidelineError>

      <GuidelineError
        title={
          "F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received"
        }
        successCriterion={"3.2.1 On Focus"}
        serial={2}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#on-focus"}
        guideline={"3.2.1"}
        level={Level.A}
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
      >
        <a
          id={"keayboard__blur-error-second"}
          onFocus={() => {
            document!.getElementById("keayboard__blur-error-second")!.blur();
          }}
          href="Page.html"
        >
          <img src={LINK} />
        </a>
      </GuidelineError>

      <GuidelineError
        title={"Keyboard focus is not indicated visually"}
        successCriterion={"keyboard"}
        serial={3}
        guideline={"3.2.1"}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html"
        }
      >
        <a className={"no-outline"} href={"link.html"}>
          Link with no focus style
        </a>
      </GuidelineError>
    </>
  );
};
