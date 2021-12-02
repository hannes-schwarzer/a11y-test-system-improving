import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const LabelInName = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F96: Failure due to the accessible name not containing the visible label text"
          }
          successCriterionInWords={"Label in Name"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#label-in-name"
          }
          successCriterionNumber={"2.5.3"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F96.html"
          }
          explanation={
            'Mismatch of visible button text and accessible name supplied via aria-label: The text in a search button reads "Go" but the accessible name provided in an aria-label attribute is "Find in this site"'
          }
        >
          <button id="sitesearch" aria-label="Find in this site">
            Go
          </button>
        </TestCase>
        <TestCase
          title={
            "F96: Failure due to the accessible name not containing the visible label text"
          }
          successCriterionInWords={"Label in Name"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#label-in-name"
          }
          successCriterionNumber={"2.5.3"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F96.html"
          }
          explanation={
            'Invisible link text disrupts visible label text string in accessible name: A download link reads "Download specification" but there is invisible link text so that the accessible name of that link is "Download gizmo specification". While the visible label text is contained in the accessible name, there is no string match which may prevent the link from being activated by speech input.'
          }
        >
          <a href="#">
            Download <span className="accessibly-hidden">gizmo</span>{" "}
            specification
          </a>
        </TestCase>
        <TestCase
          title={
            "F96: Failure due to the accessible name not containing the visible label text"
          }
          successCriterionInWords={"Label in Name"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#label-in-name"
          }
          successCriterionNumber={"2.5.3"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F96.html"
          }
          explanation={
            'Input with a hidden label carrying text that differs from the input\'s value attribute: An input of type="submit" with the value="search" which is exposed as visible label of the input, has a programmatically linked and accessibly hidden label enclosing the text "Find in this site" referenced by aria-labelledby. Because aria-labelledby takes precedence over the value of the input, the accessible name of the input in most browser / screen reader combinations will be "Find in this site". Speech users speaking a command such as "Click search" will be unable to activate the input.'
          }
        >
          <div id="hidden-label">Find in this site</div>
          <input type="submit" aria-labelledby="hidden-label" value="search" />
        </TestCase>
      </Frame>
    </>
  );
};
