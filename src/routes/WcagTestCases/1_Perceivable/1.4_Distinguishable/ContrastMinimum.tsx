import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import "./ContrastMinimum.css";
import classNames from "classnames";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ContrastMinimum = (props: Props) => {
  const badlyPoor = classNames(
    "contrast-minimum__errors-badly-identified",
    "contrast-minimum__error-poor-contrast"
  );

  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without " +
            "specifying background colors or vice versa"
          }
          successCriterionInWords={"Contrast (Minimum)"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
          }
          successCriterionNumber={"1.4.3"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html"
          }
          explanation={
            "Specifying only background color with CSS: In the example below the background color is defined on the " +
            "CSS stylesheet, however the foreground color is not defined. Therefore, the example fails the Success " +
            "Criterion."
          }
          level={Level.AA}
        >
          <p className={"contrast-minimum__whiteBackground"}>
            My background is white.
          </p>
        </TestCase>

        <TestCase
          title={
            "F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without " +
            "specifying background colors or vice versa"
          }
          successCriterionInWords={"Contrast (Minimum)"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
          }
          successCriterionNumber={"1.4.3"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html"
          }
          explanation={
            "Specifying only foreground color with CSS: In the example below the foreground color is defined" +
            " on the CSS stylesheet, however the background color is not defined. Therefore, the example fails the Success " +
            "Criterion."
          }
          level={Level.AA}
        >
          <p className={"contrast-minimum__whiteForeground"}>
            My foreground is white.
          </p>
        </TestCase>

        <TestCase
          title={
            "Small text does not have a contrast ratio of at least 4.5:1 so does not meet 1.4.3 Contrast (Minimum) (AA)"
          }
          successCriterionInWords={"Contrast (Minimum)"}
          successCriterionNumber={"1.4.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
          }
          level={Level.AA}
        >
          <p className={"low-contrast-small-aa"}>
            This small text does not have enough contrast with it's background
          </p>
        </TestCase>

        <TestCase
          title={
            "Large text does not have a contrast ratio of at least 3:1 so does not meet 1.4.3 Contrast (Minimum) (AA)"
          }
          successCriterionInWords={"Contrast (Minimum)"}
          successCriterionNumber={"1.4.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
          }
          level={Level.AA}
        >
          <p className={"low-contrast-large-aa"}>
            This large text does not have enough contrast with it's background
          </p>
        </TestCase>

        <TestCase
          title={"Errors identified with a poor color contrast"}
          successCriterionInWords={"Contrast (Minimum)"}
          level={Level.AA}
          successCriterionNumber={"1.4.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
          }
          explanation={
            "Because of the poor color contrast the error message is hard to read and the marked input fields are hardly recognizable."
          }
        >
          {/*"errors-badly-identified","error-poor-contrast"*/}
          <form className={badlyPoor}>
            <div
              className={"contrast-minimum__validation-summary"}
              role={"alert"}
            >
              You need to fix the errors on this page before continuing.
            </div>
            <label>
              Claimant's name
              <input
                className={"contrast-minimum__has-errors"}
                name={"name"}
                type={"text"}
              />
            </label>
            <label>
              Claimant's surname
              <input name={"surname"} type={"text"} />
            </label>
            <label>
              Claimant's date of birth
              <input
                className={"contrast-minimum__has-errors"}
                name={"date-of-birth"}
                type={"text"}
              />
            </label>
          </form>
        </TestCase>
      </Frame>
    </>
  );
};
