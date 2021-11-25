import { TestCase } from "../TestCase";
import { Link } from "react-router-dom";

export const HeadingsTestCases = () => {
  return (
    <>
      <h2>Headings</h2>
      <TestCase
        testCaseTitle={"Empty heading"}
        testCategory={"headings"}
        testCaseNumber={35}
      >
        <h4></h4>
        <p>This paragraph is preceded by an empty h4</p>
      </TestCase>
      <TestCase
        testCaseTitle={"Missing h1"}
        testCategory={"headings"}
        testCaseNumber={36}
      >
        <Link to={"/headings/missingh1"}>Example page with no H1</Link>
      </TestCase>
      <TestCase
        testCaseTitle={"Text formatting used instead of an actual heading"}
        testCategory={"headings"}
        testCaseNumber={37}
      >
        <div className={"fake-heading"}>Fake Heading</div>
        <p>
          This paragraph is preceded by a div that is styled to look like a
          heading
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"Headings not structured in a hierarchical manner"}
        testCategory={"headings"}
        testCaseNumber={38}
      >
        <h3>Heading h3</h3>
        <p>
          Pages should be structured in a hierarchical manner, generally with
          one 1st degree headings (h1) being the most important (usually page
          titles or main content heading), then 2nd degree headings (h2 -
          usually major section headings), down to 3rd degree headings
          (sub-sections of the h2), and so on.
        </p>
        <h5>Heading h5</h5>
        <p>
          Technically, lower degree headings should be contained within headings
          of the next highest degree (i.e., one should not skip heading levels,
          such as from an h2 to an h4, going down the document).
        </p>
        <h4>Heading h4</h4>
        <p>
          This is an example where heading levels have been skipped and are not
          in a logical order, which makes the page difficult to understand and
          navigate for people using assistive technologies such as screen
          reader.
        </p>
      </TestCase>
    </>
  );
};
