import { TestCase } from "../../TestCase";
import "./UseOfColor.css";

export const UseOfColor = () => {
  return (
    <>
      <TestCase
        testCaseTitle={
          "F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision"
        }
        testCategory={"1.4.1 Use of Color"}
        testCaseNumber={1}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"}
        guideline={"1.4.1"}
      >
        <p>
          To find out more about the{" "}
          <a href="rain_in_spain.htm">rain in spain</a> there are many
          resources.
        </p>
      </TestCase>
    </>
  );
};
