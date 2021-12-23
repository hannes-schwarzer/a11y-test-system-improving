import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Link } from "react-router-dom";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const PageTitled = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Empty page title"}
          successCriterionInWords={"Page Titled"}
          successCriterionNumber={"2.4.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#page-titled"
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F25.html"
          }
          id={"2.4.2_1"}
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link to={"/wcag/operable/navigable/page-titled/empty-title"}>
              Link to empty page title
            </Link>
          </p>
        </TestCase>

        <TestCase
          title={"No page title"}
          successCriterionInWords={"Page Titled"}
          successCriterionNumber={"2.4.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#page-titled"
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/standards-guidelines/act/rules/html-page-non-empty-title-2779a5/"
          }
          id={"2.4.2_2"}
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link to={"/wcag/operable/navigable/page-titled/no-page-title"}>
              Link to page with no title
            </Link>
          </p>
        </TestCase>

        <TestCase
          title={"This page has two title elements and the first is empty."}
          successCriterionInWords={"Page Titled"}
          successCriterionNumber={"2.4.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#page-titled"
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/standards-guidelines/act/rules/html-page-non-empty-title-2779a5/"
          }
          id={"2.4.2_3"}
          explanation={
            "This rule assumes that Success Criterion 2.4.2 Page Titled does not require that a " +
            "document only has one title element, nor that it is a child of the head element of a document. " +
            "While this is invalid in HTML, the HTML 5.2 specification describes what " +
            "should happen in case of multiple titles, and titles outside the head element. " +
            "Because of this, neither of these validation issues causes a conformance problem for WCAG."
          }
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link to={"/wcag/operable/navigable/page-titled/two-page-titles"}>
              Link to page with two titles
            </Link>
          </p>
        </TestCase>

        <TestCase
          title={
            "This page has a title element that only contains a separator character."
          }
          successCriterionInWords={"Page Titled"}
          successCriterionNumber={"2.4.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#page-titled"
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/standards-guidelines/act/rules/html-page-non-empty-title-2779a5/"
          }
          id={"2.4.2_4"}
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link
              to={
                "/wcag/operable/navigable/page-titled/only-separater-in-title"
              }
            >
              Link to page with only separater in title
            </Link>
          </p>
        </TestCase>

        <TestCase
          title={"Inappropriate page title"}
          successCriterionInWords={"Page Titled"}
          successCriterionNumber={"2.4.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#page-titled"
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/standards-guidelines/act/rules/html-page-non-empty-title-2779a5/"
          }
          id={"2.4.2_5"}
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link
              to={
                "/wcag/operable/navigable/page-titled/inappropriate-page-title"
              }
            >
              Link to page with inappropriate page title
            </Link>
          </p>
        </TestCase>
      </Frame>
    </>
  );
};
