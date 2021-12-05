import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import "./UseOfColor.css";
import classNames from "classnames";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const UseOfColor = (props: Props) => {
  const badlyColor = classNames(
    "use-of-color__errors-badly-identified",
    "use-of-color__errors-colour-only"
  );
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Color alone is used to convey content"}
          successCriterionInWords={"Use of Color"}
          level={Level.A}
          successCriterionNumber={"1.4.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"
          }
          explanation={
            "Color is used as the only visual means of conveying information and distinguishing a visual element."
          }
        >
          <p>
            The green mushrooms listed here are OK to eat. The red mushrooms
            will kill you.
          </p>
          <ul>
            <li className={"use-of-color__poisonous"}>Amanita</li>
            <li className={"use-of-color__safe"}>Chanterelle</li>
            <li className={"use-of-color__safe"}>Porcini</li>
            <li className={"use-of-color__safe"}>Shitake</li>
            <li className={"use-of-color__poisonous"}>Tylopilus</li>
          </ul>
        </TestCase>

        <TestCase
          title={
            "F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision"
          }
          successCriterionInWords={"Use of Color"}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F73.html"}
          level={Level.A}
          successCriterionNumber={"1.4.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"
          }
          explanation={
            "Links miss the underline and are only identifiable by their blue color."
          }
        >
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua <a href={"#"}>A normal Link</a>. <br />
            At vero eos et accusam et justo duo dolores et ea rebum.{" "}
            <a className={"use-of-color__color-alone-link"} href={"#"}>
              Link only identifiable by color alone.
            </a>{" "}
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet.
          </p>
        </TestCase>

        <TestCase
          title={
            "Link not clearly identifiable and distinguishable from surrounding text"
          }
          successCriterionInWords={"Use of Color"}
          successCriterionNumber={"1.4.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"
          }
          explanation={
            "A web page includes a large number of links within the body text. The links are styled so that they do not have underlines and are very similar in color to the body text. This would be a failure because users would be unable to differentiate the links from the body text."
          }
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F73.html"}
        >
          <p className={"use-of-color__unobvious-link"}>
            Find out more about{" "}
            <a href={"https://www.bbc.co.uk/programmes/b006q2x0"}>Doctor Who</a>
          </p>
        </TestCase>

        <TestCase
          title={"Errors identified by colour only"}
          successCriterionInWords={"Use of Color"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"
          }
          successCriterionNumber={"1.4.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F81.html"
          }
          explanation={
            "The objective of this technique is to describe the failure that occurs when a required field or an error field is marked with color differences only, without an alternate way to identify the required field or error field. This can cause problems for people who are blind or colorblind, because they may not be able to perceive the color differences that indicate which field is required or which field is causing an error."
          }
        >
          {/*use-of-color__errors-badly-identified; use-of-color__errors-colour-only*/}
          <form className={badlyColor}>
            <div className={"use-of-color__validation-summary"} role={"alert"}>
              You need to fix the errors on this page before continuing.
            </div>
            <label>
              Passport number{" "}
              <input
                className={"use-of-color__has-errors"}
                name={"name"}
                type={"text"}
              />
            </label>
            <label>
              Name on passport <input name={"surname"} type={"text"} />
            </label>
            <label>
              Date of expiry{" "}
              <input
                className={"use-of-color__has-errors"}
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
