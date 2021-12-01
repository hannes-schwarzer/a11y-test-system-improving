import {
  Level,
  GuidelineError,
} from "../../../structural/GuidelineError/GuidelineError";
import "./NonTextContrast.css";

export const NonTextContrast = () => {
  return (
    <>
      <GuidelineError
        title={
          "F78: Failure of Success Criterion 1.4.11 and 2.4.7 due to styling element outlines and borders in a way that " +
          "removes or renders non-visible the visual focus indicator"
        }
        successCriterion={"1.4.11 Non-text Contrast"}
        serial={1}
        explanation={
          "The focus indicator is turned off with CSS: The following CSS example will remove the default focus indicator, " +
          "which fails the requirement to provide a visible focus indicator."
        }
        level={Level.AA}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F78.html"
        }
        guideline={"1.4.11"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast"
        }
      >
        <a href={"somepage.html"} className={"nontextconstrast__no-focus"}>
          Link to some page
        </a>
      </GuidelineError>

      <GuidelineError
        title={
          "F78: Failure of Success Criterion 1.4.11 and 2.4.7 due to styling element outlines and borders in a way that " +
          "removes or renders non-visible the visual focus indicator"
        }
        successCriterion={"1.4.11 Non-text Contrast"}
        serial={2}
        explanation={
          "The outline of elements is visually similar to the focus indicator: The following CSS example will create an " +
          "outline around links that looks the same as the focus indicator. This makes it impossible for users to " +
          "determine which one in fact has the focus, even though the user agent does draw the focus indicator."
        }
        level={Level.AA}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F78.html"
        }
        guideline={"1.4.11"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast"
        }
      >
        <a
          href={"somepage.html"}
          className={"nontextconstrast__constant-dotted-focus"}
        >
          Link to some page
        </a>
      </GuidelineError>

      <GuidelineError
        title={
          "F78: Failure of Success Criterion 1.4.11 and 2.4.7 due to styling element outlines and borders in a way that " +
          "removes or renders non-visible the visual focus indicator"
        }
        successCriterion={"1.4.11 Non-text Contrast"}
        serial={3}
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
        guideline={"1.4.11"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast"
        }
      >
        <a
          href={"somepage.html"}
          className={"nontextconstrast__constant-medium-focus"}
        >
          Link to some page
        </a>
      </GuidelineError>
    </>
  );
};
