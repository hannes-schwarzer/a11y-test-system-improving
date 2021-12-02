import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import { Link } from "react-router-dom";

export const PageTitled = () => {
  document.title = "";
  return (
    <>
      <GuidelineError
        title={"Empty page title"}
        successCriterion={"2.4.2 Page Titled"}
        serial={1}
        guideline={"2.4.2"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#page-titled"}
        level={Level.A}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F25.html"
        }
      >
        Placeholder and Reminder: This page has an empty page title
      </GuidelineError>

      <GuidelineError
        title={"This page does not have a title element."}
        successCriterion={"2.4.2 Page Titled"}
        serial={2}
        guideline={"2.4.2"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#page-titled"}
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
        successCriterion={"2.4.2 Page Titled"}
        serial={3}
        guideline={"2.4.2"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#page-titled"}
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
        successCriterion={"2.4.2 Page Titled"}
        serial={4}
        guideline={"2.4.2"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#page-titled"}
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
        successCriterion={"2.4.2 Page Titled"}
        serial={4}
        guideline={"2.4.2"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#page-titled"}
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
        successCriterion={"2.4.2 Page Titled"}
        serial={4}
        guideline={"2.4.2"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#page-titled"}
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
        successCriterion={"2.4.2 Page Titled"}
        serial={5}
        guideline={"2.4.2"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#page-titled"}
        level={Level.A}
        linkToExplanation={
          "https://www.w3.org/WAI/standards-guidelines/act/rules/html-page-non-empty-title-2779a5/"
        }
      >
        <Link to={"/page-title/inappropriate"}>Inappropriate page title</Link>
      </GuidelineError>

      <GuidelineError
        title={"Empty page title"}
        successCriterion={"2.4.2 Page Titled"}
        serial={6}
        guideline={"2.4.2"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#page-titled"}
        level={Level.A}
        linkToExplanation={
          "https://www.w3.org/WAI/standards-guidelines/act/rules/html-page-non-empty-title-2779a5/"
        }
      >
        <Link to={"/page-title/empty"}>Empty page title</Link>
      </GuidelineError>
      <GuidelineError
        title={"Missing page title"}
        successCriterion={"2.4.2 Page Titled"}
        serial={7}
        guideline={"2.4.2"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#page-titled"}
        level={Level.A}
        linkToExplanation={
          "https://www.w3.org/WAI/standards-guidelines/act/rules/html-page-non-empty-title-2779a5/"
        }
      >
        <Link to={"/page-title/missing"}>Missing page title</Link>
      </GuidelineError>
    </>
  );
};
