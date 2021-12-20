import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ConsistentIdentification = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F31: Failure of Success Criterion 3.2.4 due to using two different labels for the same function on different Web pages within a set of Web pages"
          }
          successCriterionInWords={"Consistent Identification"}
          successCriterionNumber={"3.2.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#consistent-identification"
          }
          explanation={
            'One of the most common examples of using inconsistent labels for components with the same function is to use a button that says "search" in one page and to use a button that says "find" on another page when they both serve the identical function.'
          }
          level={Level.AA}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F31.html"
          }
          id={"3.2.4_1"}
        >
          <div>
            <h3>Form on first page</h3>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Search" />
            </form>
          </div>
          <div>
            <h3>Form on second page</h3>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Find" />
            </form>
          </div>
        </TestCase>
      </Frame>
    </>
  );
};
