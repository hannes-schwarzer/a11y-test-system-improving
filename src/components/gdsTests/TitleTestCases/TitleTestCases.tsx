import { Link } from "react-router-dom";
import { TestCase } from "../../TestCase";

export const TitleTestCases = () => {
  return (
    <>
      <h2>Page Titles</h2>
      <TestCase
        testCaseTitle={"Inappropriate page title"}
        testCategory={"title"}
        testCaseNumber={32}
      >
        <Link to={"/page-title/inappropriate"}>Inappropriate page title</Link>
      </TestCase>
      <TestCase
        testCaseTitle={"Empty page title"}
        testCategory={"title"}
        testCaseNumber={33}
      >
        <Link to={"/page-title/empty"}>Empty page title</Link>
      </TestCase>
      <TestCase
        testCaseTitle={"Missing page title"}
        testCategory={"title"}
        testCaseNumber={34}
      >
        <Link to={"/page-title/missing"}>Missing page title</Link>
      </TestCase>
    </>
  );
};
