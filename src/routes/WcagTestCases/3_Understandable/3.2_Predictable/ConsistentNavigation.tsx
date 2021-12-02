import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ConsistentNavigation = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F66: Failure of Success Criterion 3.2.3 due to presenting navigation links in a different relative order on different pages"
          }
          successCriterionInWords={"Consistent Navigation"}
          successCriterionNumber={"3.2.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#consistent-navigation"
          }
          level={Level.AA}
          explanation={
            "An XHTML menu presenting a series of links that are in a different relative order on two different pages: Examples of a navigation mechanism that presents links in a different order."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F66.html"
          }
        >
          Page 1 Menu
          <nav id="menu">
            <a href="Brazil.htm">Brazil</a>
            <br />
            <a href="Canada.htm">Canada</a>
            <br />
            <a href="Germany.htm">Germany</a>
            <br />
            <a href="Poland.htm">Poland</a>
          </nav>
          Page 2 Menu
          <nav id="menu">
            <a href="Canada.htm">Canada</a>
            <br />
            <a href="Brazil.htm">Brazil</a>
            <br />
            <a href="Germany.htm">Germany</a>
            <br />
            <a href="Poland.htm">Poland</a>
          </nav>
        </TestCase>
      </Frame>
    </>
  );
};
