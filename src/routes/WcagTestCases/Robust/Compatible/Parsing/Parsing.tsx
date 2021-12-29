import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const Parsing = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID"
          }
          successCriterionInWords={"Parsing"}
          successCriterionNumber={"4.1.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#parsing"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F77.html"
          }
          explanation={
            "This describes a failure condition where duplicate ID errors are known to cause problems for " +
            "assistive technologies when they are trying to interact with content. Duplicate values of type " +
            "ID can be problematic for user agents that rely on this attribute to accurately convey relationships " +
            "between different parts of content to users. For example, a screen reader may use ID values to " +
            "identify the applicable header content for a data cell within a data table, or an input control " +
            "to which a given label applies. If these values are not unique, the screen reader will be " +
            "unable to programmatically determine which headers are associated with the data cell or which " +
            "control is associated with which label or name."
          }
          level={Level.A}
          id={"4.1.1_1"}
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
        </TestCase>

        <TestCase
          title={"Two unique labels, but identical for= attributes"}
          successCriterionInWords={"Parsing"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#parsing"
          }
          successCriterionNumber={"4.1.1"}
          linkToExplanation={
            "https://stackoverflow.com/questions/59490259/wcag-2-0-level-aa-input-element-error-no-input-on-code"
          }
          level={Level.A}
          id={"4.1.1_2"}
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
            <input type="submit" value="Submit" />
          </form>
        </TestCase>
      </Frame>
    </>
  );
};
