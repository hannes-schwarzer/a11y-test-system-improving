import { TestCase } from "../TestCase";
import "./LayoutTestCases.css";

export const LayoutTestCases = () => {
  return (
    <>
      <h2>Page Layout</h2>
      <TestCase
        testCaseTitle={"Wide page forces users to scroll horizontally"}
        testCaseNumber={6}
        testCategory={"layout"}
      >
        <div className={"constrained-box"}>
          <p className={"constrained"}>
            When sites are constructed to require horizontal scrolling in order
            to navigate or read content at a normal size of 100% using standard
            screen sizes, additional problems can arise for users with low
            vision or mobility impairments.
          </p>
          <p className={"constrained-extra"}>
            This is some text you have to horizontally scroll to read.
          </p>
        </div>
      </TestCase>
    </>
  );
};
