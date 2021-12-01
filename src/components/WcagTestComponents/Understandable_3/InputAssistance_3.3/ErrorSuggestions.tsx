import { GuidelineError, Level } from "../../../GuidelineError";

export const ErrorSuggestions = () => {
  return (
    <>
      <GuidelineError
        title={
          "Error messages - no suggestion for corrections given, e.g. required format"
        }
        successCriterion={"3.3.3 Error Suggestion"}
        serial={94}
        guideline={"3.3.3"}
        linkToGuideline={
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
    </>
  );
};
