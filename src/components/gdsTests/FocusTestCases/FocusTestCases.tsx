import { TestCase } from "../../TestCase";
import "./FocusTestCases.css";

export const FocusTestCases = () => {
  return (
    <>
      <h2>Focus</h2>
      <TestCase
        testCaseTitle={"Focus not visible"}
        testCategory={"focus"}
        testCaseNumber={12}
      >
        <a className={"not-visible-outline-link"} href={"#"}>
          This link has visible focus
        </a>
        but this button
        <button className={"not-visible-outline-button"}>Search</button>
        doesn't.
      </TestCase>
    </>
  );
};
