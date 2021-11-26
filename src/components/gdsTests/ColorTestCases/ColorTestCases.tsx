import { TestCase } from "../../TestCase";
import "./ColorTestCases.css";

export const ColorTestCases = () => {
  return (
    <>
      <h2>Color and Contrast</h2>
      <TestCase
        testCaseTitle={"Colour alone is used to convey content"}
        testCategory={"color"}
        testCaseNumber={7}
        guideline={"1.4.1"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"}
      >
        <p>
          The green mushrooms listed here are OK to eat. The red mushrooms will
          kill you.
        </p>
        <ul>
          <li className={"poisonous"}>Amanita</li>
          <li className={"safe"}>Chanterelle</li>
          <li className={"safe"}>Porcini</li>
          <li className={"safe"}>Shitake</li>
          <li className={"poisonous"}>Tylopilus</li>
        </ul>
      </TestCase>
      <TestCase
        testCaseTitle={
          "Small text does not have a contrast ratio of at least 4.5:1 so does not meet AA"
        }
        testCategory={"color"}
        testCaseNumber={8}
        guideline={"1.4.3"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
        }
      >
        <p className={"low-contrast-small-aa"}>
          This small text does not have enough contrast with it's background
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={
          "Large text does not have a contrast ratio of at least 3:1 so does not meet AA"
        }
        testCategory={"color"}
        testCaseNumber={9}
        guideline={"1.4.3"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
        }
      >
        <p className={"low-contrast-large-aa"}>
          This large text does not have enough contrast with it's background
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={
          "Small text does not have a contrast ratio of at least 7:1 so does not meet AAA"
        }
        testCategory={"color"}
        testCaseNumber={10}
        guideline={"1.4.6"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced"
        }
      >
        <p className={"low-contrast-small-aa"}>
          This small text does not have enough contrast with it's background
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={
          "Large text does not have a contrast ratio of at least 4.5:1 so does not meet AAA"
        }
        testCategory={"color"}
        testCaseNumber={11}
        guideline={"1.4.6"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced"
        }
      >
        <p className={"low-contrast-large-aaa"}>
          This large text does not have enough contrast with it's background
        </p>
      </TestCase>
    </>
  );
};
