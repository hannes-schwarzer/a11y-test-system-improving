import { Level, TestCase } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";
import { Link } from "react-router-dom";

interface Props {
  pageTitle: string;
}

export const Interruptions = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit"
          }
          successCriterionInWords={"Interruptions"}
          explanation={
            "The page below is a failure because it will redirect to the URI http://www.example.com/newpage after a time limit of 5 seconds."
          }
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#interruptions"
          }
          successCriterionNumber={"2.2.4"}
          level={Level.AAA}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F40.html"
          }
          id={"2.2.4_1"}
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link
              to={
                "/wcag/operable/enough-time/timing-adjustable/redirect-to-other-page"
              }
            >
              Link to page that redirects after 20 seconds
            </Link>
          </p>
        </TestCase>
        <TestCase
          title={
            "F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page"
          }
          successCriterionInWords={"Interruptions"}
          explanation={
            'This is a deprecated example that changes the user\'s page at regular intervals. Content developers should not use this technique to simulate "push" technology. Developers cannot predict how much time a user will require to read a page; premature refresh can disorient users. Content developers should avoid periodic refresh and allow users to choose when they want the latest information. (The number in the content attribute is the refresh interval in seconds.)'
          }
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#interruptions"
          }
          successCriterionNumber={"2.2.4"}
          level={Level.AAA}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F41.html"
          }
          id={"2.2.4_2"}
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link
              to={
                "/wcag/operable/enough-time/timing-adjustable/refreshing-page"
              }
            >
              Link to page that refreshes after 20 seconds
            </Link>
          </p>
        </TestCase>
      </Frame>
    </>
  );
};
