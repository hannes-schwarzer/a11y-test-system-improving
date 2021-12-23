import { Frame } from "../../../../../components/Frame/Frame";
import { Level, TestCase } from "../../../../../components/TestCase/TestCase";
import { useState } from "react";
import "./StatusMessages.css";

interface Props {
  pageTitle: string;
}

export const StatusMessages = (props: Props) => {
  const [visibility, setVisibility] = useState<string>("sm__hidden");
  const findOrange = () => {
    setVisibility("sm__visible");
  };
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F103: Failure of Success Criterion 4.1.3 due to providing status messages that cannot be " +
            "programmatically determined through role or properties"
          }
          level={Level.AA}
          successCriterionInWords={"Status Message"}
          successCriterionNumber={"4.1.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#status-messages"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/working-examples/failure-status-message/"
          }
          explanation={
            "This demonstrates a failure of Status Messages, where messages about search results are " +
            "returned without being surfaced via the aria status role. After a user presses a Search button, " +
            'the page content does a mock search for words that rhyme with "orange". None are returned, ' +
            'which results in a change to content: the message "0 results returned". ' +
            "This text is not given an appropriate role for a status message, and so a screen reader will not " +
            'announce "Zero results returned" unless a user manually navigates to it.'
          }
          id={"4.1.3_1"}
        >
          <div role={"search"}>
            <label htmlFor={"mockinput"}>
              Search for words that rhyme with:{" "}
              <input
                type={"text"}
                name={"mockinput"}
                id={"mockinput"}
                value={"orange"}
              />
            </label>
            <button
              id={"btn"}
              onClick={() => {
                findOrange();
              }}
            >
              Search
            </button>
          </div>
          <h2 className={visibility}>Results</h2>
          <p className={visibility} id={"resultmsg"}>
            0 results returned
          </p>
        </TestCase>

        <TestCase
          title={
            'Using role="alert" or aria-live="assertive" on content which is not important and time-sensitive'
          }
          level={Level.AA}
          successCriterionInWords={"Status Messages"}
          successCriterionNumber={"4.1.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#status-messages"
          }
          linkToExplanation={
            "https://rocketvalidator.com/html-validation/bad-value-alert-for-attribute-role-on-element-ul"
          }
          explanation={
            "The alert role can be used to tell the user an element has been dynamically updated. " +
            "Screen readers will instantly start reading out the updated content when the role is added. " +
            "The element <ul> doesn’t accept this kind of role"
          }
          id={"4.1.3_2"}
        >
          <ul role={"alert"}>
            <li>Element 1</li>
            <li>Element 2</li>
          </ul>
        </TestCase>
      </Frame>
    </>
  );
};
