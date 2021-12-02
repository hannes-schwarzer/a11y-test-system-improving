import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
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
        <GuidelineError
          title={
            "F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision"
          }
          successCriterion={"1.4.1 Use of Color"}
          serial={1}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"
          }
          guideline={"1.4.1"}
        >
          <p>
            To find out more about the{" "}
            <a href="rain_in_spain.htm">rain in spain</a> there are many
            resources.
          </p>
        </GuidelineError>

        <GuidelineError
          title={"Color alone is used to convey content"}
          successCriterion={"1.4.1 Use of Color"}
          serial={2}
          guideline={"1.4.1"}
          linkToGuideline={
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
        </GuidelineError>

        <GuidelineError
          title={"Identifying links by colour alone"}
          successCriterion={"1.4.1 Use of Color"}
          serial={3}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F73.html"}
          level={Level.A}
          guideline={"1.4.1"}
          linkToGuideline={
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
        </GuidelineError>

        <GuidelineError
          title={
            "Link not clearly identifiable and distinguishable from surrounding text"
          }
          successCriterion={"links"}
          guideline={"1.4.1"}
          level={Level.A}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"
          }
          explanation={
            "A Web page includes a large number of links within the body text. The links are styled so that they do not have underlines and are very similar in color to the body text. This would be a failure because users would be unable to differentiate the links from the body text."
          }
          serial={4}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F73.html"}
        >
          <p className={"unobvious-link"}>
            Find out more about{" "}
            <a href={"https://www.bbc.co.uk/programmes/b006q2x0"}>Doctor Who</a>
          </p>
        </GuidelineError>

        <GuidelineError
          title={"Errors identified by colour only"}
          successCriterion={"1.4.1 Use of Color"}
          serial={92}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"
          }
          guideline={"1.4.1"}
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
        </GuidelineError>
      </Frame>
    </>
  );
};
