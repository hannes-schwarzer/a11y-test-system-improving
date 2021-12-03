import { Level, TestCase } from "../../components/TestCase/TestCase";

export const Duplicates = () => {
  return (
    <>
      <TestCase
        title={"Duplicate id"}
        successCriterionInWords={"Parsing"}
        successCriterionNumber={"4.1.1"}
        linkToSuccessCriterion={
          "https://www.w3.org/WAI/WCAG21/quickref/#parsing"
        }
        level={Level.A}
        linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F77.html"}
        explanation={
          "In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features."
        }
      >
        <div id={"nav"}>global nav</div>
        <div id={"nav"}>page nav</div>
      </TestCase>

      <TestCase
        title={"EmptyPageTitle h1"}
        successCriterionInWords={"Name, Role, Value"}
        successCriterionNumber={"4.1.2"}
        linkToSuccessCriterion={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        level={Level.A}
      >
        <h1></h1>
        <p>This paragraph is preceded by an empty h1</p>
      </TestCase>

      <TestCase
        title={"Form element has no label"}
        successCriterionInWords={"Name, Role, Value"}
        successCriterionNumber={"4.1.2"}
        level={Level.A}
        linkToSuccessCriterion={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
      >
        <form>
          <input type={"text"} />
        </form>
      </TestCase>

      <TestCase
        title={"Form element has no label"}
        successCriterionInWords={"Labels or Instructions"}
        linkToSuccessCriterion={
          "https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions"
        }
        successCriterionNumber={"3.3.2"}
        level={Level.A}
        linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
      >
        <form>
          <input type={"text"} />
        </form>
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
    </>
  );
};
