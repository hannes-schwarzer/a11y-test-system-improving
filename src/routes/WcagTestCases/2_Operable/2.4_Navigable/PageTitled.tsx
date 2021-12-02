import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import { Link } from "react-router-dom";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const PageTitled = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={"Empty page title"}
          successCriterionInWords={"Page Titled"}
          serial={1}
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
        </GuidelineError>

        <GuidelineError
          title={"This page does not have a title element."}
          successCriterionInWords={"Page Titled"}
          serial={2}
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
        </GuidelineError>

        <GuidelineError
          title={"This page has a title element that is empty."}
          successCriterionInWords={"Page Titled"}
          serial={3}
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
        </GuidelineError>

        <GuidelineError
          title={
            "This page does not have a title element. The title element in the content of the iframe does not function as the title for the entire page."
          }
          successCriterionInWords={"Page Titled"}
          serial={4}
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
        </GuidelineError>

        <GuidelineError
          title={"This page has two title elements and the first is empty."}
          successCriterionInWords={"Page Titled"}
          serial={4}
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
        </GuidelineError>

        <GuidelineError
          title={
            "This page has a title element that only contains a separator character."
          }
          successCriterionInWords={"Page Titled"}
          serial={4}
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
        </GuidelineError>

        <GuidelineError
          title={"Inappropriate page title"}
          successCriterionInWords={"Page Titled"}
          serial={5}
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
        </GuidelineError>

        <GuidelineError
          title={"Empty page title"}
          successCriterionInWords={"Page Titled"}
          serial={6}
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
        </GuidelineError>
        <GuidelineError
          title={"Missing page title"}
          successCriterionInWords={"Page Titled"}
          serial={7}
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
        </GuidelineError>
      </Frame>
    </>
  );
};
