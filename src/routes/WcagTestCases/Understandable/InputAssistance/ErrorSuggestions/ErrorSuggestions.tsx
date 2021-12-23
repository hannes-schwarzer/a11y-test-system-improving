import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import "./ErrorSuggestions.css";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ErrorSuggestions = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "Error messages - no suggestion for corrections given, e.g. required format"
          }
          successCriterionInWords={"Error Suggestion"}
          successCriterionNumber={"3.3.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#error-suggestion"
          }
          level={Level.AA}
          id={"3.3.3_1"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/general/G85"
          }
          explanation={
            "The objective of this technique is to provide assistance in correcting " +
            "input errors where the information supplied by the user is not accepted."
          }
        >
          <form>
            <label className={"error-suggestion__required-format-not-given"}>
              Phone number
              <span className={"error-suggestion__error-message"}>
                is not valid
              </span>
              <input
                className={"error-suggestion__has-errors"}
                pattern={"7[0-9]{9}"}
                required={true}
                type={"tel"}
              />
            </label>
          </form>
        </TestCase>
      </Frame>
    </>
  );
};
