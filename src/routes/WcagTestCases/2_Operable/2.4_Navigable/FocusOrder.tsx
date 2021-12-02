import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import "./FocusOrder.css";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const FocusOrder = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F44: Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability"
          }
          successCriterionInWords={"Focus Order"}
          successCriterionNumber={"2.4.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#focus-order"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F44.html"
          }
          level={Level.A}
          explanation={
            "The following example incorrectly uses tabindex to specify an alternative tab order: If this list is navigated by the tab key, the list is navigated in the order Homepage, chapter 3, chapter 2, chapter 1, which does not follow the sequence in the content."
          }
        >
          <ol>
            <li>
              <a href="main.html" tabIndex={1}>
                Homepage
              </a>
            </li>
            <li>
              <a href="chapter1.html" tabIndex={4}>
                Chapter 1
              </a>
            </li>
            <li>
              <a href="chapter2.html" tabIndex={3}>
                Chapter 2
              </a>
            </li>
            <li>
              <a href="chapter3.html" tabIndex={2}>
                Chapter 3
              </a>
            </li>
          </ol>
        </TestCase>

        <TestCase
          title={"Focus order in wrong order"}
          successCriterionInWords={"Focus Order"}
          successCriterionNumber={"2.4.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#focus-order"
          }
          level={Level.A}
        >
          <div className={"focus-order-broken"}>
            <a className={"first"} href={"#"}>
              First link
            </a>
            <a className={"second"} href={"#"}>
              Second link
            </a>
            <a className={"third"} href={"#"}>
              Third link
            </a>
          </div>
        </TestCase>

        <TestCase
          title={"Link with tabindex greater than 0"}
          successCriterionInWords={"Focus Order"}
          linkToExplanation={
            "https://dequeuniversity.com/rules/axe/4.0/tabindex"
          }
          successCriterionNumber={"2.4.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#focus-order"
          }
          level={Level.A}
        >
          <a href={"page.html"} tabIndex={5}>
            A link with a tabindex greater than 0
          </a>
        </TestCase>
      </Frame>
    </>
  );
};
