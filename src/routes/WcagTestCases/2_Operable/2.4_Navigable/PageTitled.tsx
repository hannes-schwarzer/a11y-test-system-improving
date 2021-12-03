import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import { Link } from "react-router-dom";
import { Frame } from "../../../../components/Frame/Frame";

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
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link to={"/page-title/empty-title"}>Link to empty page title</Link>
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
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link to={"/page-title/no-title"}>Link to page with no title</Link>
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
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link to={"/page-title/two-titles"}>
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
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link to={"/page-title/only-separater-in-title"}>
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
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link to={"/page-title/inappropriate-page-title"}>
              Link to page with inappropriate page title
            </Link>
          </p>
        </TestCase>
      </Frame>
    </>
  );
};
