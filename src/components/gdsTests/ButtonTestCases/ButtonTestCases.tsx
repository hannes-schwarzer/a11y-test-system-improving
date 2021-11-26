import { TestCase } from "../../TestCase";
import SUBMIT from "../../../assets/submit.png";

export const ButtonTestCases = () => {
  return (
    <>
      <h2>Buttons</h2>
      <TestCase
        testCaseTitle={"Image button has no alt attribute"}
        testCategory={"button"}
        testCaseNumber={88}
      >
        <input src={SUBMIT} type={"image"} />
      </TestCase>
      <TestCase
        testCaseTitle={"Empty button"}
        testCategory={"button"}
        testCaseNumber={89}
        guideline={"4.1.2"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
      >
        <button></button>
      </TestCase>
      <TestCase
        testCaseTitle={"Uninformative alt attribute value on image button"}
        testCategory={"button"}
        testCaseNumber={90}
      >
        <input alt={"click"} src={SUBMIT} type={"image"} />
      </TestCase>
      <TestCase
        testCaseTitle={"Empty alt attribute on image button"}
        testCategory={"button"}
        testCaseNumber={91}
      >
        <input alt={""} src={SUBMIT} type={"image"} />
      </TestCase>
    </>
  );
};
