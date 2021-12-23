import { Frame } from "../../../../../components/Frame/Frame";
import { Level, TestCase } from "../../../../../components/TestCase/TestCase";

interface Props {
  pageTitle: string;
}

export const IdentifyInputPurpose = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F107: Failure of Success Criterion 1.3.5 due to incorrect autocomplete attribute values"
          }
          level={Level.AA}
          successCriterionInWords={"Identify Input Purpose"}
          successCriterionNumber={"1.3.5"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#identify-input-purpose"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F107"
          }
          explanation={
            "Incorrect attribute An online form used to collect the user's name and birthday which uses incorrect autocomplete attributes. The correct attribute value for the first control is name and for the second control the made-up attribute value birthday was used instead of bday for this example."
          }
          id={"1.3.5_1"}
        >
          <h2>Your details:</h2>
          <label htmlFor="name1">Name:</label>
          <input type="text" name="field1a" autoComplete="email" id="name1" />
          <label htmlFor="birthday1">Birthday:</label>
          <input
            type="text"
            name="field1b"
            autoComplete="birthday"
            id="birthday1"
          />
        </TestCase>
      </Frame>
    </>
  );
};
