import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import "./ErrorSuggestions.css";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ErrorSuggestions = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={
            "Error messages - no suggestion for corrections given, e.g. required format"
          }
          successCriterionInWords={"3.3.3 Error Suggestion"}
          serial={94}
          successCriterionNumber={"3.3.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#error-suggestion"
          }
          level={Level.AA}
        >
          <form>
            <label className={"required-format-not-given"}>
              Phone number
              <span className={"error-message"}>is not valid</span>
              <input
                className={"has-errors"}
                pattern={"7[0-9]{9}"}
                required={true}
                type={"tel"}
              />
            </label>
          </form>
        </GuidelineError>
      </Frame>
    </>
  );
};
