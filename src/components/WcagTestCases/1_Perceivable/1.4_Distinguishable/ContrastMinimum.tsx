import { GuidelineError } from "../../../structural/GuidelineError/GuidelineError";
import "./ContrastMinimum.css";
import classNames from "classnames";

export const ContrastMinimum = () => {
  const badlyPoor = classNames(
    "errors-badly-identified",
    "error-poor-contrast"
  );

  return (
    <>
      <GuidelineError
        title={
          "F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without " +
          "specifying background colors or vice versa"
        }
        successCriterion={"1.4.3 Contrast (Minimum)"}
        serial={1}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
        }
        guideline={"1.4.3"}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html"
        }
        explanation={
          "Specifying only background color with CSS: In the example below the background color is defined on the " +
          "CSS stylesheet, however the foreground color is not defined. Therefore, the example fails the Success " +
          "Criterion."
        }
      >
        <p className={"whiteBackground"}>My background is white.</p>
      </GuidelineError>
      <GuidelineError
        title={
          "F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without " +
          "specifying background colors or vice versa"
        }
        successCriterion={"1.4.3 Contrast (Minimum)"}
        serial={2}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
        }
        guideline={"1.4.3"}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html"
        }
        explanation={
          "Specifying only foreground color with CSS: In the example below the foreground color is defined" +
          " on the CSS stylesheet, however the background color is not defined. Therefore, the example fails the Success " +
          "Criterion."
        }
      >
        <p className={"whiteForeground"}>My foreground is white.</p>
      </GuidelineError>

      <GuidelineError
        title={
          "F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without " +
          "specifying background colors or vice versa"
        }
        successCriterion={"1.4.3 Contrast (Minimum)"}
        serial={3}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
        }
        guideline={"1.4.3"}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html"
        }
        explanation={
          "Specifying foreground color of link text with CSS: In the example below the link text (foreground) color is " +
          "defined. However, the background color is not defined. Therefore, the example fails the " +
          "Success Criterion."
        }
      >
        <p>
          ... document body... <a href="foo.htm">Foo</a>
        </p>
      </GuidelineError>

      <GuidelineError
        title={
          "Small text does not have a contrast ratio of at least 4.5:1 so does not meet AA"
        }
        successCriterion={"1.4.3 Contrast (Minimum)"}
        serial={4}
        guideline={"1.4.3"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
        }
      >
        <p className={"low-contrast-small-aa"}>
          This small text does not have enough contrast with it's background
        </p>
      </GuidelineError>

      <GuidelineError
        title={
          "Large text does not have a contrast ratio of at least 3:1 so does not meet AA"
        }
        successCriterion={"1.4.3 Contrast (Minimum)"}
        serial={5}
        guideline={"1.4.3"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
        }
      >
        <p className={"low-contrast-large-aa"}>
          This large text does not have enough contrast with it's background
        </p>
      </GuidelineError>

      <GuidelineError
        title={"Errors identified with a poor colour contrast"}
        successCriterion={"forms"}
        serial={6}
      >
        {/*"errors-badly-identified","error-poor-contrast"*/}
        <form className={badlyPoor}>
          <div className={"validation-summary"} role={"alert"}>
            You need to fix the errors on this page before continuing.
          </div>
          <label>
            Claimant's name
            <input className={"has-errors"} name={"name"} type={"text"} />
          </label>
          <label>
            Claimant's surname
            <input name={"surname"} type={"text"} />
          </label>
          <label>
            Claimant's date of birth
            <input
              className={"has-errors"}
              name={"date-of-birth"}
              type={"text"}
            />
          </label>
        </form>
      </GuidelineError>
    </>
  );
};
