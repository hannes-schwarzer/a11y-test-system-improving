import { Level, GuidelineError } from "../../../GuidelineError";
import LINK from "../../../../assets/link.png";
import GO from "../../../../assets/go.png";

export const Keyboard = () => {
  const nextPage = () => {
    //dummy shell function
  };

  return (
    <>
      <GuidelineError
        title={
          "F54: Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event " +
          "handlers (including gesture) for a function"
        }
        category={"2.1.1 Keyboard"}
        serial={1}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
        guideline={"2.1.1"}
        level={Level.A}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F54.html"
        }
        explanation={
          "The following example is of an image that responds to a mouse click to go to another page. " +
          "This is a failure because the keyboard cannot be used to move to the next page."
        }
      >
        <p>
          <img
            onMouseDown={() => {
              nextPage();
            }}
            src="nextarrow.gif"
            alt="Go to next page"
          />
        </p>
      </GuidelineError>

      <GuidelineError
        title={
          "F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received"
        }
        category={"2.1.1 Keyboard"}
        serial={2}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
        guideline={"2.1.1"}
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
        category={"2.1.1 Keyboard"}
        serial={3}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
        guideline={"2.1.1"}
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
        title={
          "F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links"
        }
        category={"2.1.1 Keyboard"}
        serial={4}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
        guideline={"2.1.1"}
        level={Level.A}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html"
        }
        explanation={
          "Scripting a span element: Scripted event handling is added to a span element so that it functions " +
          "as a link when clicked with a mouse. Assistive technology does not recognize this element as a link."
        }
      >
        <span
          onClick={() => {
            document.location.href = "newpage.html";
          }}
        >
          Fake link
        </span>
      </GuidelineError>

      <GuidelineError
        title={
          "F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links"
        }
        category={"2.1.1 Keyboard"}
        serial={5}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
        guideline={"2.1.1"}
        level={Level.A}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html"
        }
        explanation={
          "Scripting an img element: Scripted event handling is added to an img element so that it functions as a link when clicked " +
          "with a mouse. Assistive technology does not recognize this element as a link."
        }
      >
        <img
          src={GO}
          alt="go to the new page"
          onClick={() => {
            document.location.href = "newpage.html";
          }}
        />
      </GuidelineError>
    </>
  );
};
