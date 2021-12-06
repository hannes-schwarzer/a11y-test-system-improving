import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import "./ErrorIdentification.css";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ErrorIdentification = (props: Props) => {
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
          explanation={
            "If an input error is automatically detected, the item that is in error should be identified and the error should be described to the user in text. But this isn't the case here."
          }
        >
          <form className={"error-identification__errors-badly-identified"}>
            <div
              className={"error-identification__validation-summary"}
              role={"alert"}
            >
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
