import { GuidelineError } from "../../../GuidelineError";
import "./ContrastMinimum.css";

export const ContrastMinimum = () => {
  return (
    <>
      <GuidelineError
        title={
          "F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without " +
          "specifying background colors or vice versa"
        }
        category={"1.4.3 Contrast (Minimum)"}
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
        category={"1.4.3 Contrast (Minimum)"}
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
        category={"1.4.3 Contrast (Minimum)"}
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
        category={"color"}
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
        category={"color"}
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
    </>
  );
};
