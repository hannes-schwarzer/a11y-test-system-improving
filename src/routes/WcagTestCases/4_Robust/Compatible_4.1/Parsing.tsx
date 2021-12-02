import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";

export const Parsing = () => {
  return (
    <>
      <GuidelineError
        title={
          "F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID"
        }
        successCriterion={"4.1.1 Parsing"}
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

      <GuidelineError
        title={"Two unique labels, but identical for= attributes"}
        successCriterion={"4.1.1 Parsing"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#parsing"}
        serial={2}
        guideline={"4.1.1"}
        linkToExplanation={
          "https://stackoverflow.com/questions/59490259/wcag-2-0-level-aa-input-element-error-no-input-on-code"
        }
        level={Level.A}
      >
        <form>
          <label htmlFor={"two-labels-day"}>Date of issue</label>
          <p>
            <label htmlFor={"two-labels-day"}>Day</label>
            <input id={"two-labels-day"} type={"text"} />
            <label htmlFor={"two-labels-month"}>Month</label>
            <input id={"two-labels-month"} type={"text"} />
            <label htmlFor={"two-labels-year"}>Year</label>
            <input id={"two-labels-year"} type={"text"} />
          </p>
        </form>
      </GuidelineError>

      <GuidelineError
        title={"Duplicate id"}
        successCriterion={"4.1.1 Parsing"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#parsing"}
        level={Level.A}
        serial={132}
        linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F77.html"}
        explanation={
          "In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features."
        }
      >
        <div id={"nav"}>global nav</div>
        <div id={"nav"}>page nav</div>
      </GuidelineError>
    </>
  );
};
