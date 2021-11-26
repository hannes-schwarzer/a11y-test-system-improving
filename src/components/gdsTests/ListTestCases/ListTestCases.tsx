import { TestCase } from "../../TestCase";

export const ListTestCases = () => {
  return (
    <>
      <h2>Lists</h2>
      <TestCase
        testCaseTitle={"LI element with no parent"}
        testCategory={"list"}
        testCaseNumber={39}
      >
        <li>no parent</li>
      </TestCase>
      <TestCase
        testCaseTitle={"List not marked up as a list"}
        testCategory={"list"}
        testCaseNumber={40}
      >
        * fake list object 1
        <br />
        * fake list object 2
        <br />
        * fake list object 3
        <br />
        * fake list object 4
        <br />
      </TestCase>
      <TestCase
        testCaseTitle={
          "DT or DD elements that are not contained within a DL element"
        }
        testCategory={"list"}
        testCaseNumber={41}
      >
        <dt>html</dt>
        <dd>a markup language for describing web documents</dd>
      </TestCase>
      <TestCase
        testCaseTitle={"Improperly nested lists"}
        testCategory={"list"}
        testCaseNumber={42}
      >
        <ul>
          <ul>
            <li>improperly nested</li>
          </ul>
        </ul>
      </TestCase>
    </>
  );
};
