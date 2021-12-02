import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import "./UseOfColor.css";
import classNames from "classnames";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const UseOfColor = (props: Props) => {
  const badlyColor = classNames(
    "errors-badly-identified",
    "errors-colour-only"
  );
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision"
          }
          successCriterionInWords={"Use of Color"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"
          }
          successCriterionNumber={"1.4.1"}
          level={Level.A}
        >
          <p>
            To find out more about the{" "}
            <a href="rain_in_spain.htm">rain in spain</a> there are many
            resources.
          </p>
        </TestCase>

        <TestCase
          title={"Color alone is used to convey content"}
          successCriterionInWords={"Use of Color"}
          level={Level.A}
          successCriterionNumber={"1.4.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"
          }
        >
          <p>
            The green mushrooms listed here are OK to eat. The red mushrooms
            will kill you.
          </p>
          <ul>
            <li className={"poisonous"}>Amanita</li>
            <li className={"safe"}>Chanterelle</li>
            <li className={"safe"}>Porcini</li>
            <li className={"safe"}>Shitake</li>
            <li className={"poisonous"}>Tylopilus</li>
          </ul>
        </TestCase>

        <TestCase
          title={"Identifying links by colour alone"}
          successCriterionInWords={"Use of Color"}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F73.html"}
          level={Level.A}
          successCriterionNumber={"1.4.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"
          }
        >
          <p>
            <a href={"#"}>A normal Link</a>
            <br />
            Some text
            <br />
            <a className={"color-alone-link"} href={"#"}>
              Link only identifiable by color alone
            </a>
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
            "A Web page includes a large number of links within the body text. The links are styled so that they do not have underlines and are very similar in color to the body text. This would be a failure because users would be unable to differentiate the links from the body text."
          }
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F73.html"}
        >
          <p className={"unobvious-link"}>
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
        >
          <form className={badlyColor}>
            {" "}
            {/*"errors-badly-identified","errors-colour-only"*/}
            <div className={"validation-summary"} role={"alert"}>
              You need to fix the errors on this page before continuing.
            </div>
            <label>
              Passport number{" "}
              <input className={"has-errors"} name={"name"} type={"text"} />
            </label>
            <label>
              Name on passport <input name={"surname"} type={"text"} />
            </label>
            <label>
              Date of expiry{" "}
              <input
                className={"has-errors"}
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
