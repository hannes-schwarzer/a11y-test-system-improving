import { TestCase, Level } from "../../../../components/TestCase/TestCase";
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
        <TestCase
          title={"Errors are not identified"}
          successCriterionInWords={"Error Identification"}
          level={Level.A}
          successCriterionNumber={"3.3.1"}
          linkToSuccessCriterion={
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
        </TestCase>
      </Frame>
    </>
  );
};
