import { Level, TestCase } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";
import { Link } from "react-router-dom";

interface Props {
  pageTitle: string;
}

export const TimingAdjustable = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit"
          }
          successCriterionInWords={"Timing Adjustable"}
          explanation={
            "meta http-equiv of {time-out}; url=... is often used to automatically redirect users. When this occurs after a time delay, it is an unexpected change of context that may interrupt the user. It is acceptable to use the meta element to create a redirect when the time-out is set to zero, since the redirect is instant and will not be perceived as a change of context. However, it is preferable to use server-side methods to accomplish this."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F40.html"
          }
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#timing-adjustable"
          }
          successCriterionNumber={"2.1.1"}
          level={Level.A}
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link
              to={
                "/wcag/operable/enough-time/timing-adjustable/redirect-to-other-page"
              }
            >
              Link to page that redirects after 5 seconds
            </Link>
          </p>
        </TestCase>
        <TestCase
          title={
            "F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page"
          }
          successCriterionInWords={"Timing Adjustable"}
          explanation={
            "This is a deprecated example that changes the user's page at regular intervals. Content developers should " +
            'not use this technique to simulate "push" technology. Developers cannot predict how much time a user will ' +
            "require to read a page; premature refresh can disorient users. Content developers should avoid periodic " +
            "refresh and allow users to choose when they want the latest information. (The number in the content " +
            "attribute is the refresh interval in seconds.)"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F41.html"
          }
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#timing-adjustable"
          }
          successCriterionNumber={"2.1.1"}
          level={Level.A}
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link
              to={
                "/wcag/operable/enough-time/timing-adjustable/refreshing-page"
              }
            >
              Link to page that refreshes after 5 seconds
            </Link>
          </p>
        </TestCase>
      </Frame>
    </>
  );
};
