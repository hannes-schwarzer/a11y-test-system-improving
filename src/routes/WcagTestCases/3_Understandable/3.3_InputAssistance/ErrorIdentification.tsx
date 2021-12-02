import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import classNames from "classnames";
import "./ErrorIdentification.css";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ErrorIdentification = (props: Props) => {
  const formClassHundredSeven = classNames(
    "errors-badly-identified",
    "errors-not-identified"
  );
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={"Errors are not identified"}
          successCriterion={"Error Identification"}
          serial={1}
          level={Level.A}
          guideline={"3.3.1"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#error-identification"
          }
        >
          {/*"errors-badly-identified","errors-not-identified"*/}
          <form className={formClassHundredSeven}>
            <div className={"validation-summary"} role={"alert"}>
              You need to fix the errors on this page before continuing.
            </div>
            <label>
              Name
              <input name={"name"} type={"text"} />
            </label>
            <label>
              Surname
              <input name={"surname"} type={"text"} />
            </label>
            <label>
              Date of birth
              <input name={"date-of-birth"} type={"text"} />
            </label>
          </form>
        </GuidelineError>
      </Frame>
    </>
  );
};
