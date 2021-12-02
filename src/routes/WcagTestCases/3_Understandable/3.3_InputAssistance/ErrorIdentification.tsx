import { GuidelineError } from "../../../../components/GuidelineError/GuidelineError";
import classNames from "classnames";
import "./ErrorIdentification.css";

export const ErrorIdentification = () => {
  const formClassHundredSeven = classNames(
    "errors-badly-identified",
    "errors-not-identified"
  );
  return (
    <>
      <GuidelineError
        title={"Errors are not identified"}
        successCriterion={"forms"}
        serial={107}
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
    </>
  );
};
