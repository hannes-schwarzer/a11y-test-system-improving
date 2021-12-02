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
          Placeholder and Reminder: This page has an empty page title
        </TestCase>

        <TestCase
          title={"This page does not have a title element."}
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
          <html>
            <h1>this page has no title</h1>
          </html>
        </TestCase>

        <TestCase
          title={"This page has a title element that is empty."}
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
          <html>
            <title></title>
          </html>
        </TestCase>

        <TestCase
          title={
            "This page does not have a title element. The title element in the content of the iframe does not function as the title for the entire page."
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
          <html>
            <iframe src="/test-assets/sc2-4-2-title-page-with-title.html"></iframe>
          </html>
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
          <html>
            <head>
              <title></title>
            </head>
            <body>
              <title>Title of the page.</title>
            </body>
          </html>
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
          <html>
            <title> </title>
          </html>
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
          <Link to={"/page-title/inappropriate"}>Inappropriate page title</Link>
        </TestCase>

        <TestCase
          title={"Empty page title"}
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
          <Link to={"/page-title/empty"}>Empty page title</Link>
        </TestCase>
        <TestCase
          title={"Missing page title"}
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
          <Link to={"/page-title/missing"}>Missing page title</Link>
        </TestCase>
      </Frame>
    </>
  );
};
