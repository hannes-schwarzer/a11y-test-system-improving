import { GuidelineError, Level } from "../../../GuidelineError";

export const Parsing = () => {
  return (
    <>
      <GuidelineError
        title={
          "F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID"
        }
        category={"4.1.1 Parsing"}
        serial={1}
        guideline={"4.1.1"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#parsing"}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F77.html"
        }
        explanation={
          "This describes a failure condition where duplicate ID errors are known to cause problems for assistive technologies when they are trying to interact with content. Duplicate values of type ID can be problematic for user agents that rely on this attribute to accurately convey relationships between different parts of content to users. For example, a screen reader may use ID values to identify the applicable header content for a data cell within a data table, or an input control to which a given label applies. If these values are not unique, the screen reader will be unable to programmatically determine which headers are associated with the data cell or which control is associated with which label or name."
        }
        level={Level.A}
      >
        <form id={"firstname"}>
          <label>
            Firstname:
            <input type="text" name="firstname" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form id={"firstname"}>
          <label>
            Lastname:
            <input type="text" name="firstname" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </GuidelineError>
    </>
  );
};
